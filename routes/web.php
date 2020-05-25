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

Route::get('/{path?}', [
    'uses' => 'ReactController@showReact',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

//Auth::routes(['verify' => true]);
//Route::get('/home', 'HomeController@index')->name('home')->middleware('verified');
