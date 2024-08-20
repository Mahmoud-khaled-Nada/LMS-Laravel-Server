<?php

namespace App\Domain\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use App\Models\Course;

final class CourseRepository
{

    private $items;

    public function __construct()
    {
        $this->items = collect([]);
    }

    public function get(): LengthAwarePaginator
    {
        if ($this->items->isEmpty())
            $this->items = Course::query()
                ->latest()
                ->paginate(5);

        return $this->items;
    }

    public function save(Course $course): Course
    {
        $course->save();
        return $course;
    }

    public function findById(int $id): ?Course
    {
        return Course::find($id);
    }


    public function delete(Course $course): void
    {
        $course->delete();
    }
}
