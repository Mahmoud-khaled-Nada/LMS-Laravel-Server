<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\Admin\AdminController;
use App\Http\Controllers\Dashboard\Admin\AuthController;
use App\Http\Controllers\Dashboard\CategoryController;

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




Route::middleware(['guest'])->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/login', [AuthController::class, 'postLogin'])->name('post.login');
});

Route::middleware(['auth'])->group(function () {

    Route::get('/', fn() => Inertia::render('Dashboard'));

    Route::get('/profile', fn() => Inertia::render('Profile'));
    Route::get('/messages', fn() => Inertia::render('Messages'));

    //

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::group(['prefix' => 'admins'], function () {
        Route::get('', [AdminController::class, 'index']);
        Route::get('create', [AdminController::class, 'create']);
        Route::post('store', [AdminController::class, 'store']);
        Route::get('edit/{id}', [AdminController::class, 'edit']);
        Route::put('update/{id}', [AdminController::class, 'update']);
        Route::post('delete/{id}', [AdminController::class, 'destroy']);
    });

    Route::prefix('categories')->as('categories:')->group(static function (): void {
        Route::get('', [CategoryController::class, 'index']);
        Route::get('create', [CategoryController::class, 'create']);
        Route::post('store', [CategoryController::class, 'store']);
        Route::get('edit/{ulid}', [CategoryController::class, 'edit']);
        Route::put('update/{ulid}', [CategoryController::class, 'update']);
        Route::post('delete/{ulid}', [CategoryController::class, 'destroy']);
    });

    //TODO: implement this method for 
    Route::prefix('categories')->as('categories:')->group(static function (): void {
        Route::get('', [CategoryController::class, 'index']);
        Route::get('create', [CategoryController::class, 'create']);
        Route::post('store', [CategoryController::class, 'store']);
        Route::get('edit/{ulid}', [CategoryController::class, 'edit']);
        Route::put('update/{ulid}', [CategoryController::class, 'update']);
        Route::post('delete/{ulid}', [CategoryController::class, 'destroy']);
    });
});
