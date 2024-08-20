<?php

namespace App\Http\Controllers\Dashboard\Admin;

use App\Domain\Services\AdminService;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Services\AdminServices;
use Illuminate\Http\RedirectResponse;
use App\Utils\Constants\RolesConstant;
use App\Http\Controllers\DashboardController;
use App\Http\Requests\Dashboard\AdminCreateRequest;
use App\Http\Requests\Dashboard\AdminUpdateRequest;

class AdminController extends DashboardController
{
    public function __construct(
        protected readonly AdminService $service,
    ) {}

    public function index(): Response
    {
        $admins = $this->service->getAll();
        return Inertia::render('admin/Index', compact('admins'));
    }


    public function create(): Response
    {
        $roles = RolesConstant::$roles;
        return Inertia::render('admin/Create', compact('roles'));
    }

    public function store(AdminCreateRequest $request): RedirectResponse
    {
        try {
            $this->service->create($request);
            return back();
        } catch (\Exception $ex) {
            return back()->withError($ex);
        }
    }

    public function edit($adminId): Response
    {
        $admin = User::findOrFail($adminId);
        $this->service->ensureNotSuperAdmin($admin);
        $roles = RolesConstant::$roles;
        return Inertia::render('admin/Edit', compact('roles', 'admin'));
    }


    public function update(AdminUpdateRequest $request, $id): RedirectResponse
    {
        try {
            $this->service->update($request, $id);
            return back();
        } catch (\Exception $ex) {
            return back()->withError($ex->getMessage());
        }
    }

    public function destroy($adminId): RedirectResponse
    {
        try {
            $this->service->deleteAdminById($adminId);
            return back();
        } catch (\Exception $e) {
            return back()->withError($e->getMessage());
        }
    }
}
