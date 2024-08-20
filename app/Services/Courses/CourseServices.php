<?php

namespace App\Services\Courses;

use App\Models\Course;
use Illuminate\Support\Facades\Auth;

final class CourseServices implements InterfaceCourse
{

    public function create(array $validated): void
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
        
        $course->save();
    }
}
