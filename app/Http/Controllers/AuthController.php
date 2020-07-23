<?php

namespace App\Http\Controllers;

use App\Mails\VerificationMail;
use App\Models\Plan;
use App\Models\UserActivation;
use App\User;
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
                return response()->json(['error' => 'Invalid credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Invalid credentials'],401);
        }
        $user = User::where('email', $credentials['email'])->first();
        $user->role;
        return response()->json(['user' => $user, 'token' => $token]);
    }

    public function adminLogin(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        try {
            if (!$token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
        $user = User::where('email', $credentials['email'])->first();
        if($user->role->name != 'admin' && $user->role->name != 'content') return response()->json(['error' => "Your role has no permission to access admin dashboard"],403);
        return response()->json(['user' => $user, 'token' => $token]);
    }

    public function register(Request $request)
    {

        $name = $request->get('name');
        $email = $request->get('email');
        $password = $request->get('password');
        $old = User::where('email', $email)->first();
        if($old) {
            return response()->json(['error' => 'Email address was already taken'], 422);
        }
        $user = User::create([
            'name' => $name ,
            'email' => $email,
            'password' => Hash::make($password)
        ]);
        $token = auth()->login($user);
        $user_activation = UserActivation::create([
            'user_id' => $user->id,
            'token' => $token
        ]);
//        Mail::to($user->email)->send(new VerificationMail($token));
        return response()->json(['user'=>$user, 'token' => $token]);
    }

    public function logout()
    {
        try {
            $user = auth()->userOrFail();
        } catch (UserNotDefinedException $e) {
            return response()->json(['message'=>'Token was already invalidated']);
        }
        auth()->logout();
        if (!auth()->check()) {
            return response()->json(['message' => 'Token invalidation was done successfully']);
        }
        return response()->json(['error' => 'token invalidation failed'],400);
    }

    public function getAuthenticatedUser()
    {
        try {
            $user = auth()->userOrFail();
        } catch (UserNotDefinedException $e) {
            return response()->json(['error' => 'Please login again'], 404);
        }
        return response()->json(['user' => $user]);
    }
}
