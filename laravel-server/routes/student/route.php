<?php

use App\Http\Controllers\Api\Student\AuthController;
use Illuminate\Support\Facades\Route;



Route::controller(AuthController::class)
    ->prefix('students')
    ->middleware('guest')
    ->group(static function (): void {
        Route::post('register', 'register');
        Route::post('login', 'login');
        Route::get('me', 'me');
        Route::post('logout', 'logout');
    });



Route::prefix('students')
    ->middleware('auth:api:students')
    ->group(static function (): void {
        Route::get('me', [AuthController::class, 'me']);
        Route::post('logout', [AuthController::class, 'logout']);

        Route::prefix('students')->group(static function (): void {});
        Route::prefix('students')->group(static function (): void {});
        Route::prefix('students')->group(static function (): void {});
        Route::prefix('students')->group(static function (): void {});
    });
