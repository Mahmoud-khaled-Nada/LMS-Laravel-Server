<?php

namespace App\Services;

use App\Models\User;
use Spatie\Permission\Models\Role;
use App\Utils\Transformers\AdminTransformer;

final class AdminServices
{
    private $adminWithRoles;

    public function __construct(protected AdminTransformer $adminTransformer)
    {
        $this->adminWithRoles = collect([]);
    }

    public function getAdminsWithRoles(): array
    {
        if ($this->adminWithRoles->isEmpty())
            $this->adminWithRoles = User::where('id', '!=', 1)->with('roles')->get();

        return $this->adminTransformer->transformCollection($this->adminWithRoles);
    }

    public function setAdminWithRoles(object $request): void
    {
        $admin = User::create($request->input());
        $admin->assignRole($request->input('role_id'));
    }

    public function updateAdminWithRoles(object $request, string $adminId): void
    {
        $admin = User::findOrFail($adminId);

        $this->ensureNotSuperAdmin($admin);

        $request['password'] = $request->input('password', $admin->password);

        $admin->update($request->only(['name', 'email', 'password']));
        $admin->syncRoles($request->input('role_id', []));
    }

    public function deleteAdminById(string $adminId): void
    {
        $admin = User::find($adminId);

        $this->ensureNotSuperAdmin($admin);

        $admin->delete();
    }

    public function ensureNotSuperAdmin(User $admin): void
    {
        if ($admin->id === 1)
            throw new \Exception("You can't perform this action on the super admin.", 400);
    }
}
