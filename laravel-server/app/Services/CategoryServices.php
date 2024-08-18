<?php

namespace App\Services;

use App\Models\Category;
use App\Utils\Transformers\CategoryTransformer;
use Illuminate\Database\Eloquent\Model;

final class CategoryServices
{
    private $items;

    public function __construct(
        protected CategoryTransformer $categoryTransformer
    ) {
        $this->items = collect([]);
    }

    public function get(): array
    {
        if ($this->items->isEmpty()) {
            $this->items = Category::all();
        }
        return $this->categoryTransformer->transformCollection($this->items);
    }

    public function findById(string $id): ?Model
    {
        return Category::find($id);
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
