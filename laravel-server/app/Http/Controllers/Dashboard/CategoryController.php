<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Services\CategoryServices;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function __construct(
        protected readonly CategoryServices $categoryServices,
    ) {}

    public function index(): Response
    {
        $categories = $this->categoryServices->get();
        return Inertia::render('categories/Index', compact('categories'));
    }


    public function create(): Response
    {
        return Inertia::render('categories/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate(['category' => 'required|string|min:3|max:250']);
        try {
            $this->categoryServices->add($data);
            return back();
        } catch (\Exception $ex) {
            return back()->withError($ex);
        }
    }

    public function edit($categoryId): Response
    {
        $category =  $this->categoryServices->findById($categoryId);
        return Inertia::render('categories/Edit', compact('category'));
    }


    public function update(Request $request, string $id): RedirectResponse
    {
        $data = $request->validate(['category' => 'required|string|min:3|max:250']);
        try {
            $this->categoryServices->update($id, $data);
            return back();
        } catch (\Exception $ex) {
            return back()->withError($ex->getMessage());
        }
    }


    public function destroy($categoryId): RedirectResponse
    {
        try {
            $this->categoryServices->deleteById($categoryId);
            return back();
        } catch (\Exception $e) {
            return back()->withError($e->getMessage());
        }
    }
}
