<?php

use Illuminate\Http\Request;
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


Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');
Route::get('logout', 'AuthController@logout');

Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset', 'ForgotPasswordController@reset');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'AuthController@getAuthenticatedUser');
    Route::post('email/resend', 'VerificationController@resend');
    Route::get('email/verify/{id}/{hash}', 'VerificationController@verify');

    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'ForgotPasswordController@reset');

    Route::get('users', 'UserController@getUsers');
    Route::get('user/{user_id}', 'UserController@getUser');
    Route::post('user/force_create', 'UserController@forceCreate');
    Route::put('user', 'UserController@update');
    Route::delete('user/{user_id}', 'UserController@delete');

    Route::get('categories', 'CategoryController@getCategories');
    Route::get('category/{category_id}	', 'CategoryController@getCategory');
    Route::post('category/create', 'CategoryController@create');
    Route::put('category', 'CategoryController@update');
    Route::delete('category/{category_id}', 'VideoController@getAllVideos');

    Route::get('videos', 'VideoController@getAllVideos');
    Route::get('videos/category/{category_id}', 'VideoController@getVideosByCategory');
    Route::get('videos/title/{title}', 'VideoController@getVideosByName');
    Route::post('video/upload', 'VideoController@upload');
//    Route::put('video/{video_id}', 'VideoController@update');
});

