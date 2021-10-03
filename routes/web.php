<?php

use App\Http\Controllers\PageController\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::group(['as' => 'auth.'], function () {
    Route::get('/login', [AuthController::class, 'render_login'])->name('render_login');
    Route::get('/register', [AuthController::class, 'render_register'])->name('render_register');
});
