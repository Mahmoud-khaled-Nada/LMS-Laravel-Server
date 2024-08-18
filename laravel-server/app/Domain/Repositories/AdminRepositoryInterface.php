<?php

namespace App\Domain\Repositories;

use App\Domain\Entities\Admin;

interface AdminRepositoryInterface
{
    public function save(Admin $admin): void;
    public function findByEmail(string $email): ?Admin;
}
