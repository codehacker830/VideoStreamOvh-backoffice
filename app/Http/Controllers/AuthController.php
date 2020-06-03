<?php

namespace App\Http\Controllers;

use App\Mails\VerificationMail;
use App\Models\UserActivation;
use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\UserNotDefinedException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        try {
            if (!$token = auth()->attempt($credentials)) {
                return response()->json(['status'=>'failed','error' => 'Invalid credentials']);
            }
        } catch (JWTException $e) {
            return response()->json(['status'=>'failed','error' => 'Invalid credentials']);
        }
        $user = User::where('email', $credentials['email'])->first();
        return response()->json(['status' => "success", 'user' => $user, 'token' => $token], 200);
    }

    public function adminLogin(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        try {
            if (!$token = auth()->attempt($credentials)) {
                return response()->json(['status'=>'failed','error' => 'Invalid credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['status'=>'failed','error' => 'Invalid credentials'], 401);
        }
        $user = User::where('email', $credentials['email'])->first();
        if($user->role->name != 'admin' && $user->role->name != 'content') return response()->json(['status'=>'failed', 'error' => "Your role has no permission to access admin dashboard"],403);
        return response()->json(['status'=>'success', 'user' => $user, 'token' => $token]);
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
        $user_activation = UserActivation::create([
            'user_id' => $user->id,
            'token' => $token
        ]);
        Mail::to($user->email)->send(new VerificationMail($token));
        return response()->json(['status'=>'success', 'user'=>$user, 'token' => $token], 201);
    }

    public function logout()
    {
        try {
            $user = auth()->userOrFail();
        } catch (UserNotDefinedException $e) {
            return response()->json(['status' => 'success', 'message'=>'Token was already invalidated']);
        }
        auth()->logout();
        if (!auth()->check()) {
            return response()->json(['status' => 'success', 'message' => 'Token invalidation was done successfully']);
        }
        return response()->json(['status' => 'success', 'error' => 'token invalidation failed']);
    }

    public function getAuthenticatedUser()
    {
        try {
            $user = auth()->userOrFail();
        } catch (UserNotDefinedException $e) {
            return response()->json(['status'=>'failed', 'error' => 'Please login again']);
        }
        return response()->json(['status'=>'success', 'user' => $user]);
    }

}
