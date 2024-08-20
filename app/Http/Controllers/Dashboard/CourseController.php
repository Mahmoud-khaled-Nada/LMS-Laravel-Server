<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use Inertia\Response;
use App\Services\CategoryServices;
use App\Services\Courses\CourseServices;
use App\Http\Controllers\DashboardController;
use App\Http\Requests\Dashboard\StoreCourseRequest;
use Illuminate\Http\RedirectResponse;

final class CourseController extends DashboardController
{

    public function __construct(
        protected  CategoryServices $categoryServices,
        protected  CourseServices $services
    ) {}

    public function index(): Response
    {
        return Inertia::render('courses/Index');
    }

    public function create(): Response
    {
        $categories = $this->categoryServices->get();
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
