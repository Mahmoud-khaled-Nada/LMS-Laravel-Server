<?php

namespace App\Domain\Repositories;

use App\Models\Category;

interface CategoryRepositoryInterface
{
    public function get(): array;
    public function save(Category $category): Category;
    public function findById(string $id): ?Category;
    public function delete(Category $category): void;
}
