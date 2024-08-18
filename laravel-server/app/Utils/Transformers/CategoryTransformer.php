<?php

namespace App\Utils\Transformers;

use App\Models\Category;
use Illuminate\Support\Collection;

final class CategoryTransformer
{

    private function transform(Category $category): array
    {
        return [
            "id" => $category->id,
            "name" => $category->category,
        ];
    }

    public function transformCollection(Collection $category): array
    {
        return $category->map(fn(Category $category) => $this->transform($category))->toArray();
    }
}
