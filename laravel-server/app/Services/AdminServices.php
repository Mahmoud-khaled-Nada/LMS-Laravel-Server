<?php

namespace App\Services;

use App\Models\User;
use App\Utils\Transformers\AdminTransformer;

final class AdminServices
{
    private $items;

    public function __construct(protected AdminTransformer $adminTransformer)
    {
        $this->items = collect([]);
    }

    public function get(): array
    {
        if ($this->items->isEmpty())
            $this->items = User::where('id', '!=', 1)->get();

        return $this->adminTransformer->transformCollection($this->items);
    }

    public function add(object $request): void
    {
       User::create($request->input());
    }

    public function updateAdmin(object $request, string $adminId): void
    {
        $admin = User::findOrFail($adminId);

        $this->ensureNotSuperAdmin($admin);

        $request['password'] = $request->input('password', $admin->password);

        $admin->update($request->only(['name', 'email', 'password']));
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
