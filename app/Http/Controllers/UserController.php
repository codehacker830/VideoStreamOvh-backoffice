<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Tymon\JWTAuth\Exceptions\UserNotDefinedException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class UserController extends Controller
{
    //
    public function getUsers()
    {
//        $user = auth()->user();
//        if($user->role->name != 'admin' && $user->role->name != 'content') return response()->json(['status'=>'failed', 'error' => "Your role has no permission to get user list"]);
        $users = User::all();
        foreach ($users as $user) {
            $user->role;
        }
        return response()->json(['status'=>'success','users' => $users]);
    }

    public function getUser(Request $request)
    {
        $user_id = $request->route('user_id');
        $user = User::find($user_id);
        return response()->json(compact(('user')),200);
    }

    public function forceCreate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required | string | max:255',
            'email' => 'required | string | max:255 | unique:users',
            'password' => 'required | string | min:6 | confirmed',
            'role' => 'number'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'role' => $request->get('role') ? $request->get('role') : 3
        ]);
        $user->markEmailAsVerified();

        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user', 'token'), 201);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required | string | max:255',
            'password' => 'required | string | max:255 | unique:users'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()->json()], 400);
        }
        $user = auth()->user();
        $user->name = $request->get('name');
        $user->password = Hash::make($request->get('password'));
        $user->save();
        return response()->json(compact('user'), 201);
    }

    public function delete(Request $request)
    {
//        $user = auth()->user();
//        if($user->role->name != 'admin') return response()->json(['error' => "Your role has no permission to close user account"],403);
        $user_id = $request->route('user_id');
        $user = User::find($user_id);
        $user->delete();
        if (User::find($user_id)) {
            return response()->json(['error' => 'User instance was not deleted'], 400);
        }
        $users = User::all();
        foreach ($users as $user) {
            $user->role;
        }
        return response()->json(['status' => 'success', 'users' => $users]);
    }
}
