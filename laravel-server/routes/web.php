<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



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


Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::get('/admins', function () {
    return Inertia::render('admin/Index');
});

Route::get('/admin/create', function () {
    return Inertia::render('admin/Create');
});


Route::get('/roles', function () {
    return Inertia::render('roles/Index');
});

Route::get('/role/create', function () {
    return Inertia::render('roles/Create');
});