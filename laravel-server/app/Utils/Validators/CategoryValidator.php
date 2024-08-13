<?php

namespace App\Utils\Validators;

use Illuminate\Support\Facades\Validator;

final class CategoryValidator
{
    private array $rules = [
        'name' => 'required|string|min:3|max:250',
    ];

    public function validate(array $data): array
    {
        $validator = Validator::make($data, $this->rules);

        if ($validator->fails()) {
            return [
                'errors' => $validator->errors()->all(),
                'is_valid' => false,
            ];
        }

        return [
            'is_valid' => true,
        ];
    }

    public function updateValidate(array $data): array
    {

        $updateRules = array_merge($this->rules, [
            // Add or adjust rules for update if necessary
        ]);

        $validator = Validator::make($data, $updateRules);

        if ($validator->fails()) {
            return [
                'errors' => $validator->errors()->all(),
                'is_valid' => false,
            ];
        }

        return [
            'is_valid' => true,
        ];
    }
}
