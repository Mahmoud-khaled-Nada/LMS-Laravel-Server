<?php

namespace App\Http\Controllers\Dashboard\Admin;

use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Permission;
use App\Http\Requests\Dashboard\RoleRequest;

class RoleController extends Controller
{
    public $pages = [];
    public $permissions = [];
    public function __construct()
    {
        $this->permissions = ['view', 'new', 'update', 'delete'];
        $this->pages = [
            'employees',
            'notifications',
            'events',
            'tasks',
            'meeting',
        ];
    }

    public function index()
    {

        $roles = Role::where('id', '!=', 1)->get();
        return Inertia::render('roles/Index', compact('roles'));
    }


    public function create()
    {
        $permissions = $this->permissions;
        $pages = $this->pages;
        return Inertia::render('roles/Create', compact('permissions', 'pages'));
    }


    public function store(RoleRequest $request)
    {
        $role = Role::create(['name' => $request->input('name'), 'guard_name' => 'web']);
        $role->syncPermissions(Permission::whereIn('id', $request->permissions)->pluck('name')->toArray());
        return redirect('/roles');
    }

    public function edit($id)
    {
        if ($id == 1) {
            abort(404);
        }
        $permissions = $this->permissions;
        $pages = $this->pages;
        $role = Role::findOrFail($id);
        $rolePermissions =  $role->permissions->pluck('id')->toArray();
        // return view('AdminPanel.roles.edit', get_defined_vars());
    }


    public function update(RoleRequest $request)
    {
        if ($request->id == 1) {
            abort(404);
        }
        $role = Role::FindOrFail($request->id);
        $role->update(['name' => $request->input('name')]);
        $role->syncPermissions(Permission::whereIn('id', $request->permissions)->pluck('name')->toArray());
        return redirect('/roles');
    }


    public function destroy($id)
    {
        if ($id == 1) {
            abort(404);
        }
        $role = Role::findOrFail($id);
        $role->delete();
        return redirect('/role');
    }
}
