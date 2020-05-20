<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class UserController extends Controller
{
    //
    public function authenticate(Request $request) {
        $credentials = $request->only(['email', 'password']);
        // var_dump("___", $request->all(), "___");
        try {
            if(! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user = User::where('email', $credentials['email'])->first();
        return response()->json(['status' => "success", 'user' => $user, 'token' => $token]);
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required | string | max:255',
            'email' => 'required | string | max:255 | unique:users',
            'password' => 'required | string | min:6 | confirmed'           
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password'))
        ]);


        $token = JWTAuth::fromUser($user);
        $status = "success";
        return response()->json(compact('status', 'user', 'token'), 201);
    } 

    public function forceRegister(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required | string | max:255',
            'email' => 'required | string | max:255 | unique:users',
            'password' => 'required | string | min:6 | confirmed'           
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password'))
        ]);
        $user->markEmailAsVerified();

        $token = JWTAuth::fromUser($user);
        $status = "success";
        return response()->json(compact('status', 'user', 'token'), 201);
    } 

    public function getAuthenticatedUser() {
        try {
            if(! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getCode());
        } catch (TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getCode());
        } catch (JWTException $e) {
            return response()->json(['token_absent'], $e->getCode());
        }

        return response()->json(['status' => 'success', 'user' => $user]);
    }
    
}
