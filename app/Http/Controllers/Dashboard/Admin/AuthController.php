<?php

namespace App\Http\Controllers\Dashboard\Admin;

use App\Http\Controllers\DashboardController;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends DashboardController
{
    public function login(): Response
    {
        return Inertia::render('auth/Login');
    }

    public function postLogin(Request $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');

        if (auth('web')->attempt($credentials)) {
            return back();
        } else {
            return back();
        }
    }

    public function logout(): RedirectResponse
    {
        auth('web')->logout();
        return back();
    }
}
