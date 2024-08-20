<?php

namespace App\Domain\Services\Student;

use App\Domain\Repositories\StudentRepository;
use App\Infra\Traits\Api\HasResponses;
use Illuminate\Support\Facades\Auth;
use App\Models\Student;

final class AuthService
{
    use HasResponses;

    public function __construct(
        protected StudentRepository $repository
    ) {}

    public function create(array $data): Student
    {
        return $this->repository->save($data);
    }

    public function login(object $request): ?string
    {
        $input = $request->input('email') ?? $request->input('phone');
        $fieldType = $request->input('email') ? 'email' : 'phone';
        $credentials = [$fieldType => $input, 'password' => $request->input('password')];

        $token = Auth::guard('api:students')->attempt($credentials);
        if (!$token)
            return $this->Error("Email address or password is invalid", 422);

        $student = Auth::guard('api:students')->user();
        if ($student->status === '0')
            return $this->Error(__('auth.inactive'), 422);

        return $this->Success([
            'token' => $token
        ]);
    }

    public function generateToken(string $email, string $password): ?string
    {
        $credentials = ['email' => $email, 'password' => $password];
        if (auth('api:students')->attempt($credentials))
            return auth('api:students')->attempt($credentials);

        return null;
    }
}



// http://localhost:8000/storage/uploads/student_avatars/1723846101yMd76pdMPB.jpg