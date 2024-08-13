<?php

namespace App\Http\Controllers\Dashboard\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function login(): Response
    {
        return Inertia::render('auth/Login');
    }

    public function postLogin(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth('web')->attempt($credentials)) {
            return back();
        } else {
            return back();
        }
    }

    public function logout()
    {
        auth('web')->logout();
        return redirect("/");
    }
}
