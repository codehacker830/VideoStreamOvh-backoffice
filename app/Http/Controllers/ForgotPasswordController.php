<?php

namespace App\Http\Controllers;

use App\Mails\ResetPasswordMail;
use App\Models\PasswordReset;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Mockery\Exception;
use Mockery\Generator\StringManipulation\Pass\Pass;

class ForgotPasswordController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {
        $email = $request->get('email');
        $user = User::where('email', $email)->first();
        if (!$user) {
            return response()->json(['error' => 'Your email address was not found'], 404);
        }
        $token = auth()->login($user);
        $record = PasswordReset::where('email', $email)->first();

        if($record) {
            $record->token = $token;
            $record->save();
        } else {
            $new = new PasswordReset;
            $new->email = $email;
            $new->token = $token;
            $new->save();
        }
        Mail::to($user->email)->send(new ResetPasswordMail($token));
        return response()->json(['message' => 'Password reset link Email was sent successfully!']);
    }

    public function reset(Request $request)
    {
        $email = $request->get('email');
        $token = $request->get('token');
        $password = $request->get('password');
        $record = PasswordReset::find($email);
        if($record) {
            if($record->token === $token) {
                $user = User::where('email', $email)->first();
                $user->password = Hash::make($password);
                $user->save();
                return response()->json(['message' => 'Password was reset successfully']);
            } else return response()->json(['error' => 'Invalid token'], 404);
        } else {
            return response()->json(['error' => 'Invalid email address'], 404);
        }

    }
}
