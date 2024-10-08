<?php

namespace App\Http\Requests\Dashboard;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class AdminCreateRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return User::$rules;
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
                'same' => __('validation.confirmed'),
                'exists' => __('validation.exists'),
                'not_in' => __('validation.not_in')
            ];
    }
}
