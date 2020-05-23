<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    //
    public function resend(Request $request)
    {
        $user = auth()->user();
        if ($user->hasVerifiedEmail()) {
            return response()->json(['status' => 'success', 'message' => 'email already verified'], 204);
        }
        $request->user()->sendEmailVerificationNotification();
        return response()->json(['status' => 'success', 'message' => 'verification email was sent'], 202);
    }

    public function verify(Request $request)
    {
        if (!hash_equals((string)$request->route('id'), (string)auth()->user()->getKey())) {
            throw new AuthorizationException;
        }

        if (!hash_equals((string)$request->route('hash'), sha1(auth()->user()->getEmailForVerification()))) {
            throw new AuthorizationException;
        }

        if (auth()->user()->hasVerifiedEmail()) {
            return response()->json(['status' => 'success', 'message' => 'email already verified'], 204);
        }

        auth()->user()->markEmailAsVerified();
        if (auth()->user()->hasVerifiedEmail()) {
            return response()->json(['status' => 'success', 'message' => 'verification email was sent'], 204);
        }
        return response()->json(['status' => 'failed', 'message' => 'verification email was not verified'], 400);
    }
}
