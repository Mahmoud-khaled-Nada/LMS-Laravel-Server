<?php

namespace App\Domain\Repositories;

use App\Models\User as Admin;
use Illuminate\Pagination\LengthAwarePaginator;

final class AdminRepository
{

    private $items;

    public function __construct()
    {
        $this->items = collect([]);
    }

    public function get(): LengthAwarePaginator
    {
        if ($this->items->isEmpty())
            $this->items = Admin::query()
                ->where('id', '<>', 1)
                ->latest()
                ->paginate(5);

        return $this->items;
    }

    public function save(Admin $admin): Admin
    {
        $admin->save();
        return $admin;
    }

    public function findById(int $id): ?Admin
    {
        return Admin::find($id);
    }

    public function findByEmail(string $email): ?Admin
    {
        return Admin::where('email', $email)->first();
    }

    public function delete(Admin $admin): void
    {
        $admin->delete();
    }
}
