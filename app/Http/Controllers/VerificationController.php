<?php

namespace App\Http\Controllers;

use App\Mails\VerificationMail;
use App\Models\UserActivation;
use http\Client\Curl\User;
use http\Env\Response;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class VerificationController extends Controller
{
    use VerifiesEmails;

    public function resendEmail(Request $request)
    {
        $user = auth()->user();
        if(!$user) {
            return response()->json(['error' => 'Your account was not found.'], 404);
        }
//        if ($user->hasVerifiedEmail()) {
//            return response()->json(['message' => 'Your email was already verified']);
//        }
        $token = auth()->login($user);
        $user_activation = UserActivation::where('user_id', '=', $user->id)->first();
        $user_activation->token = $token;
        $user_activation->save();
        Mail::to($user->email)->send(new VerificationMail($token));
        return response()->json(['message' => 'Verification link was sent into your email']);
    }

    public function verifyEmail(Request $request)
    {
        $token = $request->route('token');
        $user_activation = UserActivation::where('token', $token)->first();
        if ($user_activation)
        {
            $user = $user_activation->user;
            if($user)
            {
                $user->markEmailAsVerified();
                return response()->json(['message' => 'Your email was verified successfully!']);
            }
            else {
                return response()->json(['error' => "Your email address was not registered yet"], 400);
            }
        }
        return response()->json(['error' => "Your email address was not registered yet"],404);
    }
}
