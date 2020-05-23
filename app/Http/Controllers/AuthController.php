<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\UserNotDefinedException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        try {
            if (!$token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user = User::where('email', $credentials['email'])->first();
        return response()->json(['status' => "success", 'user' => $user, 'token' => $token], 200);
    }
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required | string | max:255',
            'email' => 'required | string | max:255 | unique:users',
            'password' => 'required | string | min:6 | confirmed'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password'))
        ]);
        $token = auth()->login($user);
        $status = "success";
        return response()->json(compact('status', 'user', 'token'), 201);
    }
    public function logout() {
        auth()->logout();
        if(!auth()->check()) {
            return response()->json(['status' => 'success', 'message' => 'Token invalidation success'], 200);
        }
        return response()->json(['status' => 'failed', 'message' => 'Token invalidation failed'], 400);
    }
    public function getAuthenticatedUser() {
        try {
            $user = auth()->userOrFail();
        } catch (UserNotDefinedException $e) {
            return response()->json(['status' => 'failed', 'message' => 'user not found by this token']);
        }
        return response()->json(['status' => 'success', 'user' => $user], 200);
    }

}
