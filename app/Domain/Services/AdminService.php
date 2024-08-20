<?php

namespace App\Domain\Services;

use App\Models\User as Admin;
use App\Exceptions\AdminException;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Domain\Repositories\AdminRepositoryInterface;

final class AdminService
{

    public function __construct(
        protected AdminRepositoryInterface $repository
    ) {}


    public function getAll(): LengthAwarePaginator
    {
        return $this->repository->get();
    }


    public function create(object $req): Admin
    {
        $admin = new Admin();
        $admin->name = $req->name;
        $admin->email = $req->email;
        $admin->role = $req->role;
        $admin->password = $req->password;
        return $this->repository->save($admin);
    }

    public function update(object $req, string $id): Admin
    {
        $this->ensureNotSuperAdmin($id);

        $admin = $this->repository->findById($id);

        if (!$admin)
            throw new AdminException();

        $admin->update($req->all());

        return $admin;
    }


    public function deleteAdminById(string $id): Admin
    {
        $this->ensureNotSuperAdmin($id);

        $admin = $this->repository->findById($id);

        if (!$admin) {
            throw new AdminException("Admin not found.");
        }

        $this->repository->delete($admin);

        return $admin;
    }

    public function ensureNotSuperAdmin(string $id): void
    {
        if ($id === 1)
            throw new AdminException("You can't perform this action on the super admin.", 400);
    }
}
