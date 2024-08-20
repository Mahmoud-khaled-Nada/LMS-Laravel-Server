<?php

namespace App\Utils\Transformers;

use App\Models\User;
use Illuminate\Support\Collection;

final class AdminTransformer
{

    private function transform(User $user): array
    {
        return [
            "id" => $user->id,
            "name" => $user->name,
            "email" => $user->email,
            "role" => $user->role,
            "created_at" => $user->updated_at->diffForHumans(),
        ];
    }

    public function transformCollection(Collection $users): array
    {
        return $users->map(fn(User $user) => $this->transform($user))->toArray();
    }
}
