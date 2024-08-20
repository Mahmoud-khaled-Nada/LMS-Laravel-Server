<?php

namespace App\Domain\Services;

use App\Domain\Repositories\CategoryRepository;
use App\Models\Category;
use App\Exceptions\CategoryException;


final class CategoryService
{

    public function __construct(
        protected CategoryRepository $repository
    ) {}

    public function getAll(): array
    {
        return $this->repository->get();
    }

    public function findById(string $id): ?Category
    {
        return $this->repository->findById($id);
    }


    public function create(array $req): Category
    {
        $category = new Category();
        $category->category = $req['category'];
        return $this->repository->save($category);
    }

    public function update(array $req, string $id): Category
    {

        $category = $this->repository->findById($id);

        if (!$category)
            throw new CategoryException();

        $category->update($req);

        return $category;
    }


    public function deleteById(string $id): Category
    {
        $category = $this->repository->findById($id);

        if (!$category)
            throw new CategoryException();

        $this->repository->delete($category);

        return $category;
    }
}
