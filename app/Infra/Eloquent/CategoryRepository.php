<?php

namespace App\Infra\Eloquent;

use App\Models\Category;
use App\Utils\Transformers\CategoryTransformer;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Domain\Repositories\CategoryRepositoryInterface;

final class CategoryRepository implements CategoryRepositoryInterface
{

    private $items;

    public function __construct(
        protected CategoryTransformer $transformer
    ) {
        $this->items = collect([]);
    }

    public function get(): array
    {
        if ($this->items->isEmpty()) {
            $this->items = Category::latest()->get();
        }
        return $this->transformer->transformCollection($this->items);
    }

    public function save(Category $category): Category
    {
        $category->save();
        return $category;
    }

    public function findById(string $id): ?Category
    {
        return Category::find($id);
    }

    public function delete(Category $category): void
    {
        $category->delete();
    }
}
