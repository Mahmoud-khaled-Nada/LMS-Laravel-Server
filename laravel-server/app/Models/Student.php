<?php

namespace App\Models;

use App\Utils\Constants\FileStoreConstant;
use App\Utils\Helpers\FileStorageHelper;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Student extends Authenticatable implements JWTSubject
{
    use Notifiable;

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

    protected $hidden = [
        'password',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public static $rules = [
        'name' => 'required|string|min:3|max:100',
        'email' => 'required|string|email|max:100|unique:students,email',
        'phone' => 'required|string|min:10|max:12|unique:students,phone',
        'password' => 'required|string|min:6|confirmed',
        'address' => 'required|string|min:10',
        'gender' => 'required|in:male,female',
        'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',
        'password' => 'required',
    ];


    //TODO: Implement Attributes Functionality

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = Hash::make($password);
    }

    public function setImageAttribute($file): void
    {
        $directory = FileStoreConstant::STUDENT_AVATARS_PATH->value;
        $path = FileStorageHelper::storeFile($file, $directory);
        $this->attributes['image'] = $path;
    }

    public function getImageAttribute(): string
    {
        return $this->attributes['image']
            ? asset('storage/' . $this->attributes['image'])
            : null;
    }

    public function getStatusStringAttribute()
    {
        return $this->status == 1 ? __('lang.active') : __('lang.inactive');
    }

    // public function otps()
    // {
    //     return $this->hasMany(Otp::class);
    // }

    //TODO: Implement Relationship Functionality
    public function courseReviews()
    {
        return $this->hasMany(CourseReview::class);
    }

    //TODO: Implement JWT functionality
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
