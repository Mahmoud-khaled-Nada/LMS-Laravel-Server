<?php

namespace App\Http\Controllers\Api\Student;

use App\Domain\Services\Student\AuthService;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\StudentCreateRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends ApiController
{
    public function __construct(
        protected  AuthService $service
    ) {}


    public function register(StudentCreateRequest $request): JsonResponse
    {
        $data = $request->validated();
        try {
            $this->service->create($data);
            $getToken = $this->service->generateToken($data['email'], $data['password']);
            return $this->Success($getToken, "Student registered successfully.");
        } catch (\Exception $e) {
            return $this->Error($e->getMessage());
        }
    }

    public function login(Request $request): JsonResponse
    {
        try {
            return $this->service->login($request);
        } catch (\Exception $e) {
            return $this->Error($e->getMessage());
        }
    }

    public function logout()
    {
        return auth('api:students')->logout();
    }

    public function me()
    {
        return auth('api:students')->user();
    }
}
