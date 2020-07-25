<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function getPlans()
    {
        $plans = Plan::all();
        return response()->json(['plans' => $plans]);
    }

    public function paypalSubcribe(Request $request)
    {
        $user = auth()->user();
        $plan_id = $request->get('plan_id');
        $paypal_subscription_id = $request->get('paypal_subscription_id');
        $user->plan_id = $plan_id;
        $user->paypal_subscription_id = $paypal_subscription_id;
        $user->save();
        return response()->json(['status' => 'success']);
    }

    public function stripeSubcribe(Request $request)
    {
        $user = auth()->user();
        $plan_id = $request->get('plan_id');
        $stripe_price_id = $request->get('stripe_price_id');
        $user->plan_id = $plan_id;
        $user->stripe_price_id = $stripe_price_id;
        $user->save();
        return response()->json(['status' => 'asdf']);
    }

    public function unsubscribe()
    {
        $user = auth()->user();
        $user->plan_id = null;
        $user->stripe_price_id = null;
        $user->paypal_subscription_id = null;
        $user->save();
        $token = auth()->login($user);
        return response()->json(['user'=>$user, 'token' => $token]);
    }
}
