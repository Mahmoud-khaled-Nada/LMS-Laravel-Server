<?php

namespace App\Domain\Services;

use App\Domain\Entities\Admin;
use App\Domain\Repositories\AdminRepositoryInterface;
use Exception;

class AdminService
{
    private AdminRepositoryInterface $adminRepository;

    public function __construct(AdminRepositoryInterface $adminRepository)
    {
        $this->adminRepository = $adminRepository;
    }

    public function registerAdmin(string $name, string $email, string $password ,string $role): Admin
    {
        $hashedPassword = bcrypt($password);

        if ($this->adminRepository->findByEmail($email)) {
            throw new Exception('Email already in use');
        }

        $admin = new Admin($name, $email, $hashedPassword, $role);
        $this->adminRepository->save($admin);

        return $admin;
    }
}