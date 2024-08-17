<?php

namespace App\Http\Controllers\Api\Student;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\StudentCreateRequest;
use App\Services\Student\AuthServices;
use Illuminate\Http\Request;

class AuthController extends ApiController
{
    public function __construct(
        protected  AuthServices $services
    ) {}


    public function register(StudentCreateRequest $request)
    {
        $data = $request->validated();
        try {
            $this->services->create($data);
            $getToken = $this->services->generateToken($data['email'], $data['password']);
            return $this->Success($getToken, "Student registered successfully.");
        } catch (\Exception $e) {
            return $this->Error($e->getMessage());
        }
    }

    public function login(Request $request)
    {
        $input = $request->input('email') ?? $request->input('phone');
        $fieldType = $request->input('email') ? 'email' : 'phone';
        $credentials = [$fieldType => $input, 'password' => $request->input('password')];
        try {
            return $this->services->login($credentials);
        } catch (\Exception $e) {
            return $this->Error($e->getMessage());
        }
    }

    public function logout()
    {
        return  auth('api:students')->logout();
    }

    public function me()
    {
        return auth('api:students')->user();
    }
}
