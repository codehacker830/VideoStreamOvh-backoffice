<?php

namespace App\Http\Controllers;

use App\Mails\ResetPasswordMail;
use App\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    //
    public function sendResetLinkEmail(Request $request) {
        $validator = Validator::make($request->all(), [
           'email' => 'required | email | max:255'
        ]);
        if($validator->fails()) {
            return response()->json(['error' => 'Please input valid Email address.']);
        }
        $user = User::where('email', $request->get('email'))->first();
        if(!$user) {
            return response()->json(['error' => 'Your email address was not found']);
        }
        $token = auth()->login($user);
//        Mail::to($user->email)->send(new ResetPasswordMail($token));
        return response()->json(['status' => 'success', 'message' => 'Password reset link Email was sent successfully!'], 200);
    }
    public function reset() {

    }
}
