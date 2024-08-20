<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Domain\Services\CategoryService;
use App\Domain\Services\CourseService;
use App\Http\Controllers\DashboardController;
use App\Http\Requests\Dashboard\StoreCourseRequest;

final class CourseController extends DashboardController
{

    public function __construct(
        protected  CategoryService $categoryServices,
        protected  CourseService $services
    ) {}

    public function index(): Response
    {
        return Inertia::render('courses/Index');
    }

    public function create(): Response
    {
        $categories = $this->categoryServices->getAll();
        return Inertia::render('courses/Create', compact('categories'));
    }

    public function store(StoreCourseRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        try {
            $this->services->create($validated);
            return back();
        } catch (\Exception $e) {
            return back()->withError($e->getMessage());
        }
    }
}
