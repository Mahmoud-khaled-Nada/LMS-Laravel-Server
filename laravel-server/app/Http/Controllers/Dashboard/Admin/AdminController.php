<?php

namespace App\Http\Controllers\Dashboard\Admin;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Services\AdminServices;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Dashboard\AdminCreateRequest;
use App\Http\Requests\Dashboard\AdminUpdateRequest;

class AdminController extends Controller
{
    public function __construct(
        protected readonly AdminServices $adminServices,
    ) {}

    public function index(): Response
    {
        $admins = $this->adminServices->getAdminsWithRoles();
        return Inertia::render('admin/Index', compact('admins'));
    }


    public function create(): Response
    {
        $roles = Role::where('id', '!=', 1)->get();
        return Inertia::render('admin/Create', compact('roles'));
    }

    public function store(AdminCreateRequest $request): RedirectResponse
    {
        try {
            $this->adminServices->setAdminWithRoles($request);
            return back();
        } catch (\Exception $ex) {
            return back()->withError($ex);
        }
    }

    public function edit($adminId): Response
    {
        $admin = User::findOrFail($adminId);
        $this->adminServices->ensureNotSuperAdmin($admin);
        $roles = Role::where('id', '!=', 1)->get();
        return Inertia::render('admin/Edit', compact('roles', 'admin'));
    }


    public function update(AdminUpdateRequest $request, $id): RedirectResponse
    {
        try {
            $this->adminServices->updateAdminWithRoles($request, $id);
            return back();
        } catch (\Exception $ex) {
            return back()->withError($ex->getMessage());
        }
    }


    public function destroy($adminId): RedirectResponse
    {
        try {
            $this->adminServices->deleteAdminById($adminId);
            return back();
        } catch (\Exception $e) {
            return back()->withError($e->getMessage());
        }
    }
}
