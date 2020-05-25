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
        if ($user->hasVerifiedEmail()) {
            return response()->json(['status' => 'success', 'message' => 'Email already verified'], 204);
        }
        $token = auth()->login($user);
        $user_activation = UserActivation::where('user_id', '=', $user->id)->first();
        $user_activation->token = $token;
        $user_activation->save();
//        Mail::to($user->email)->send(new VerificationMail($token));
        return response()->json(['status' => 'success', 'message' => 'Verification email was sent'], 202);
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
                return response()->json(['status' => 'success', 'message' => 'Email Verified Successfully!'], 201);
            }
            else{
                return response()->json(['status' => 'failed', 'error' => "Your email address was not registered yet"],301);
            }
        }
        return response()->json(['status' => 'failed', 'error' => "Please resend verification email"],301);
    }
}
