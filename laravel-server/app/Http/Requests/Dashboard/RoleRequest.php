<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|unique:roles,name,' . $this->id,
            'permissions' => 'required|array|exists:permissions,id',
        ];
    }
    public function messages(): array
    {
        return [
            'required' => __('validation.required'),
            'unique' => __('validation.unique')
        ];
    }
}
