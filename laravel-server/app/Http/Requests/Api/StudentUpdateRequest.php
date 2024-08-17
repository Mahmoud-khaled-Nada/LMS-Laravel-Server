<?php

namespace App\Http\Requests\Api;

use App\Models\Student;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StudentUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = Student::$rules;

        $rules['email'] .= $this->id;
        $rules['phone'] .= $this->id;
        $rules['password'] = ['nullable', 'string', Password::min(6)->mixedCase()->letters()->numbers()->symbols()->uncompromised()];

        return $rules;
    }
}
