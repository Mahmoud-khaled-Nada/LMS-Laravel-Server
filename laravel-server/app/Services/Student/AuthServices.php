<?php

namespace App\Services\Student;

use App\Models\Student;
use App\Traits\Api\HandleResponses;
use App\Utils\Transformers\AdminTransformer;
use Illuminate\Support\Facades\Auth;

final class AuthServices
{
    use HandleResponses;

    private $items;

    public function __construct(
        protected AdminTransformer $adminTransformer,
    ) {
        $this->items = collect([]);
    }


    public function create(array $data): void
    {
        Student::create($data);
    }

    public function login(array $credentials)
    {
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