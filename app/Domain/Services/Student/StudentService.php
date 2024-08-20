<?php

namespace App\Domain\Services\Student;

use App\Domain\Repositories\StudentRepository;

final class StudentService
{
    public function __construct(
        protected StudentRepository $repository
    ) {}
}
