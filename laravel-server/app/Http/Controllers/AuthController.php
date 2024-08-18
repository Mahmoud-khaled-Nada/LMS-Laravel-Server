<?php

namespace App\Http\Controllers;

use App\Domain\Services\AdminService;
use App\Http\Requests\Dashboard\AdminCreateRequest;
use App\Utils\Constants\RolesConstant;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends DashboardController
{
    public function __construct(protected AdminService $service) {}


    public function index(): Response
    {
        $admins = [];
        return Inertia::render('admin/Index', compact('admins'));
    }


    public function create(): Response
    {
        $roles = RolesConstant::$roles;
        return Inertia::render('admin/Create', compact('roles'));
    }

    public function store(AdminCreateRequest $request): JsonResponse
    {
        $adminDTO = $this->service->registerAdmin(
            $request->name,
            $request->email,
            $request->password,
            $request->role
        );

        return response()->json($adminDTO);
    }
}
