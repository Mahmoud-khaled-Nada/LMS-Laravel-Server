<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_id',
        'name',
        'image',
        'price',
        'description',
        'requirements',
        'average_rate',
    ];



    public function instructor()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function lectures()
    {
        return $this->hasMany(Lecture::class);
    }

    public function courseReviews()
    {
        return $this->hasMany(CourseReview::class);
    }
}
