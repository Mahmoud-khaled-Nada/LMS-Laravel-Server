<?php

namespace App\Http\Requests\Dashboard;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class AdminUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        $roles = User::$rules;
        $roles['password'] = 'nullable|min:3';
        $roles['name'] = 'required|string|unique:users,name,' . $this->id;
        $roles['email'] = 'required|email|unique:users,email,' . $this->id;
        return $roles;
    }

    public function messages()
    {
        return
            [
                'required' => __('validation.required'),
                'string' => __('validation.string'),
                'email' => __('validation.email'),
                'max' => __('validation.max'),
                'min' => __('validation.min'),
                'same' => __('validation.confirmed')
            ];
    }
}
