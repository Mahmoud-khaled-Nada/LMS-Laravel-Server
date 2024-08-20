<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class StoreCourseRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Set to true if you want to authorize all users, otherwise add your authorization logic here
    }

    public function rules(): array
    {
        return [
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:200|unique:courses,name',
            'price' => 'required|numeric|min:0',
            'hours' => 'required|integer|min:1',
            'type' => 'required|in:online,onsite',
            'photo' => 'required|image|mimes:png,jpg,jpeg|max:2048',
            'video' => 'required|file|mimes:mp4,mov,avi|max:1048576',
            'description' => 'required|string',
            'requirements' => 'required|string',
        ];
    }
}
