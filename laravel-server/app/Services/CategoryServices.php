<?php

namespace App\Services;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

final class CategoryServices
{
    private $category;

    public function __construct()
    {
        $this->category = collect([]);
    }

    public function get(): Collection
    {
        if ($this->category->isEmpty()) {
            $this->category = Category::all();
        }
        return $this->category;
    }

    public function findById(string $id): ?Model
    {
        return $this->get()->firstWhere('id', $id);
    }

    public function add(array $data): void
    {
        Category::create($data);
    }

    public function update(string $id, array $data): void
    {
        Category::where('id', $id)->update($data);
    }

    public function deleteById(string $id): void
    {
        $category = Category::find($id);
        $category->delete();
    }
}
