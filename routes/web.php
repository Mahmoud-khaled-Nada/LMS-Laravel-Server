<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\CourseController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\Admin\AuthController;
use App\Http\Controllers\Dashboard\Admin\AdminController;


Route::group(['prefix' => 'auth'], function () {
    Route::get('/login', fn() => Inertia::render('auth/Login'));
    Route::get('/register', fn() =>  Inertia::render('auth/Register'));
    Route::get('/forgot-password', fn() => Inertia::render('auth/ForgotPassword'));
});




Route::controller(AuthController::class)
    ->middleware('guest')
    ->group(static function (): void {
        Route::get('/login', 'login')->name('auth.login');
        Route::post('/login', 'postLogin')->name('post.login');
    });



Route::middleware('auth')->group(static function (): void {

    Route::get('/', fn() => Inertia::render('Dashboard'));
    Route::get('/profile', fn() => Inertia::render('Profile'));
    Route::get('/messages', fn() => Inertia::render('Messages'));

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    //done convert
    Route::controller(AdminController::class)
        ->prefix('admins')
        ->as('admins:')
        ->group(static function (): void {
            Route::get('', 'index');
            Route::get('create', 'create');
            Route::post('store', 'store');
            Route::get('edit/{id}', 'edit');
            Route::put('update/{id}', 'update');
            Route::post('delete/{id}', 'destroy');
        });

    //done convert
    Route::controller(CategoryController::class)
        ->prefix('categories')
        ->as('categories:')
        ->group(static function (): void {
            Route::get('',  'index');
            Route::get('create', 'create');
            Route::post('store', 'store');
            Route::get('edit/{ulid}', 'edit');
            Route::put('update/{ulid}', 'update');
            Route::post('delete/{ulid}', 'destroy');
        });


    Route::controller(CourseController::class)
        ->prefix('courses')
        ->as('courses:')
        ->group(static function (): void {
            Route::get('',  'index');
            Route::get('create', 'create');
            Route::post('store', 'store');
            // Route::get('edit/{ulid}', 'edit');
            // Route::put('update/{ulid}', 'update');
            // Route::post('delete/{ulid}', 'destroy');
        });
});


// test git is push