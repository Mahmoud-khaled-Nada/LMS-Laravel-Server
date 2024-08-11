<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

Route::group(['prefix' => 'auth'], function () {
    Route::get('/login', function () {
        return Inertia::render('auth/Login');
    });
    Route::get('/register', function () {
        return Inertia::render('auth/Register');
    });
    Route::get('/forgot-password', function () {
        return Inertia::render('auth/ForgotPassword');
    });
});

