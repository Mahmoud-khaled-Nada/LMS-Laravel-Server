<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{

    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        $user = Auth::user();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
                // 'permissions' => $user->getAllPermissions()->pluck('name')
            ],
            'locale' => app()->getLocale(),
            'responseStatus' => fn() => $request->session()->get('message'),
        ];
    }
}
