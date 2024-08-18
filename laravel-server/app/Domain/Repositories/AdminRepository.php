<?php

namespace App\Domain\Repositories;

use App\Domain\Entities\Admin;
use App\Domain\Repositories\AdminRepositoryInterface;
use App\Models\User as EloquentAdmin;

class AdminRepository implements AdminRepositoryInterface
{
    public function save(Admin $admin): void
    {
        EloquentAdmin::create([
            'name' => $admin->getName(),
            'email' => $admin->getEmail(),
            'password' => $admin->getPassword(),
            'password' => $admin->getRole(),
        ]);
    }

    public function findByEmail(string $email): ?Admin
    {
        $eloquentAdmin = EloquentAdmin::where('email', $email)->first();

        if (!$eloquentAdmin)
            return null;


        return new Admin(
            $eloquentAdmin->name,
            $eloquentAdmin->email,
            $eloquentAdmin->password,
            $eloquentAdmin->role
        );
    }
}
