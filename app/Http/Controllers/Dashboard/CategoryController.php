<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Domain\Services\CategoryService;
use App\Http\Controllers\DashboardController;

final class CategoryController extends DashboardController
{
    public function __construct(
        protected readonly CategoryService $service,
    ) {}

    public function index(): Response
    {
        $categories = $this->service->getAll();
        return Inertia::render('categories/Index', compact('categories'));
    }


    public function create(): Response
    {
        return Inertia::render('categories/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate(['category' => 'required|string|min:3|max:250']);
        try {
            $this->service->create($data);
            return $this->respondWithSuccess([
                'message' => 'Category created successfully',
            ]);
        } catch (\Exception $ex) {
            return $this->respondWithError('error', 'Error creating category');
        }
    }

    public function edit(string  $categoryId): Response
    {
        $category =  $this->service->findById($categoryId);
        return Inertia::render('categories/Edit', compact('category'));
    }

    public function update(Request $request, string $id): RedirectResponse
    {
        $data = $request->validate(['category' => 'required|string|min:3|max:250']);
        try {
            $this->service->update($data, $id);
            return back();
        } catch (\Exception $ex) {
            return back()->withError($ex->getMessage());
        }
    }

    public function destroy(string $categoryId): RedirectResponse
    {
        try {
            $this->service->deleteById($categoryId);
            return back();
        } catch (\Exception $e) {
            return back()->withError($e->getMessage());
        }
    }
}
