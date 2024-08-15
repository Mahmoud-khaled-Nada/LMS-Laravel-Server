<?php

namespace App\Traits;

trait HasCommen
{
    public function getChangesValueOnly($new, $old): array
    {
        // $data = $request->validate(['category' => 'required|string|min:3|max:250']);
        // $oldValue = Category::find($id)->only(array_keys($data));
        return array_diff_assoc($new, $old);
    }
}
