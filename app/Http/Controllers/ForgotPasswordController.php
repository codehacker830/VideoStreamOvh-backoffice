<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    //
    public function sendResetLinkEmail(Request $request) {
        $request->validate(['email' => 'required|email']);

    }
}
