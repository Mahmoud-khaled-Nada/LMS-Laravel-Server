<?php

namespace App\Domain\Services;

use App\Domain\Repositories\CourseRepository;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;

final class CourseService
{

    public function __construct(
        protected CourseRepository $repository
    ) {}

    public function create(array $validated): Course
    {
        $course = new Course();
        $course->user_id = Auth::id();
        $course->category_id = $validated["category_id"];
        $course->name = $validated["name"];
        $course->price = $validated["price"];
        $course->hours = $validated["hours"];
        $course->type = $validated["type"];
        $course->requirements = $validated["requirements"];
        $course->description = $validated["description"];

        if (isset($validated['photo']))
            $course->photo = $validated['photo'];

        if (isset($validated['video']))
            $course->video = $validated['video'];

        return $this->repository->save($course);
    }
}
