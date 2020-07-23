<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Test database connection

Route::post('login', 'AuthController@login');
Route::post('admin/login', 'AuthController@adminLogin');
Route::post('register', 'AuthController@register');
Route::get('logout', 'AuthController@logout');

Route::get('email/resend', 'VerificationController@resendEmail');
Route::get('email/verify/{token}', 'VerificationController@verifyEmail');

Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset', 'ForgotPasswordController@reset');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('me', 'AuthController@getAuthenticatedUser');
    Route::get('plans', 'PaymentController@getPlans');
    Route::post('paypal-subscribe', 'PaymentController@paypalSubcribe');
    Route::post('stripe-subscribe', 'PaymentController@stripeSubcribe');


    Route::get('users', 'UserController@getUsers');
    Route::get('user/{user_id}', 'UserController@getUser');
    Route::post('user/force_create', 'UserController@forceCreate');
    Route::put('user', 'UserController@update');
    Route::delete('user/{user_id}', 'UserController@delete');

    Route::get('categories', 'CategoryController@getCategories');
    Route::post('category/create', 'CategoryController@create');
    Route::put('category', 'CategoryController@update');
    Route::delete('category/{category_id}', 'CategoryController@delete');

    Route::get('videos', 'VideoController@getAllVideos');
    Route::post('videos/upload', 'VideoController@videoUpload');
    Route::post('videos/create-content', 'VideoController@createContent');

    Route::get('videos/category/{category_id}', 'VideoController@getVideosByCategory');
    Route::get('videos/title/{title}', 'VideoController@getVideosByName');

    Route::get('video/{video_id}', 'VideoController@getVideo');
    Route::put('video/{video_id}', 'VideoController@update');
    Route::delete('video/{video_id}', 'VideoController@delete');
    Route::get('cart', 'VideoController@getMyCartList');
    Route::get('watching', 'VideoController@getWatching');
    Route::post('cart', 'VideoController@addToCart');
    Route::post('cart/delete', 'VideoController@removeFromCart');

    Route::get('upvote/{video_id}', 'VideoController@upVote');
    Route::get('downvote/{video_id}', 'VideoController@downVote');
    Route::get('removevote/{video_id}', 'VideoController@removeVote');

    Route::get('watched-time/{video_id}','VideoController@watchedTime');
    Route::post('video-duration', 'VideoController@updateDuration');
    Route::post('progress-update', 'VideoController@updateProgress');

    Route::get('state', 'StateController@getState');
    Route::get('state/trending', 'StateController@getTrending');
});




// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
