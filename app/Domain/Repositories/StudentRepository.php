<?php

namespace App\Domain\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use App\Models\Student;

final class StudentRepository
{

    private $items;

    public function __construct()
    {
        $this->items = collect([]);
    }

    public function get(): LengthAwarePaginator
    {
        if ($this->items->isEmpty())
            $this->items = Student::query()
                ->latest()
                ->paginate(5);

        return $this->items;
    }

    public function save(array $data): Student
    {
        return Student::create($data);
    }

    public function findById(int $id): ?Student
    {
        return Student::find($id);
    }

    public function findByEmail(string $email): ?Student
    {
        return Student::where('email', $email)->first();
    }

    public function delete(Student $student): void
    {
        $student->delete();
    }
}
