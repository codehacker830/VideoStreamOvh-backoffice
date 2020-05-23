<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// phpinfo();
// Route::view('/{path?}', 'welcome');

// Route::get('/', function () {
//     return view('welcome');
// });

//Auth::routes(['verify' => true]);

// Route::get('/home', 'HomeController@index')->name('home')->middleware('verified');
//  Route::get('/dashboard', function () { return view('welcome'); })->middleware('verified');
 Route::get('/{path?}', function($path) {
     return view('welcome');
 })->where('path', '.*');
//
//Route::get('upload-advanced', 'UploadController@upload');
//
//Auth::routes(['verify' => true]);
//
//Route::get('/home', 'HomeController@index')->name('home')->middleware('verified');
