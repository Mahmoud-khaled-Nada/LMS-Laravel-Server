<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'gender',
        'status',
        'address',
        'image',
        'wallet',
        'average_rate',
        'fcm_token',
        'password',
    ];


    public function courseReviews()
    {
        return $this->hasMany(CourseReview::class);
    }
}
