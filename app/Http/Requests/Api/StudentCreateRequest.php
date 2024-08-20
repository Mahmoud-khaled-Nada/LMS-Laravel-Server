<?php

namespace App\Http\Requests\Api;

use App\Models\Student;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StudentCreateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = Student::$rules;
        // $rules['password'] = ['nullable', 'string', Password::min(6)->letters()->mixedCase()->numbers()->symbols()->uncompromised()];
        $rules['password'] = ['nullable', 'string', Password::min(3)];
        return $rules;
    }
}
