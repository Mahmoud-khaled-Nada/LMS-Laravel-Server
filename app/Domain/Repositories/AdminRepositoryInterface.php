<?php

namespace App\Domain\Repositories;

use App\Models\User as Admin;
use Illuminate\Pagination\LengthAwarePaginator;

interface AdminRepositoryInterface
{
    public function get(): LengthAwarePaginator;
    public function save(Admin $admin): Admin;
    public function findById(int $id): ?Admin;
    public function findByEmail(string $email): ?Admin;
    public function delete(Admin $admin): void;
}