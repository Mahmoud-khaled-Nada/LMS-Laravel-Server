<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    use HasUlids;

    /**
     * To implement the foreign is to by use foreignUlid('category_id')->index()->constrained()->cascatOnDelete()
     * */

     protected $fillable = ['category'];
}
