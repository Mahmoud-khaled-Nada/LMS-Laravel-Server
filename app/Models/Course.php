<?php

namespace App\Models;

use App\Utils\Constants\FileStoreConstant;
use App\Utils\Helpers\FileStorageHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_id',
        'name',
        'price',
        'hours',
        'type',
        'photo',
        'video',
        'average_rate',
        'description',
        'requirements',
    ];

    //TODO: Implement Attributes Functionality

    public function setPhotoAttribute($photo): void
    {
        $directory = FileStoreConstant::COURSE_COVERS_PATH->value;
        $path = FileStorageHelper::storeFile($photo, $directory);
        $this->attributes['photo'] = $path;
    }

    public function setVideoAttribute($video): void
    {
        $directory = FileStoreConstant::COURSE_VIDEO_PATH->value;
        $path = FileStorageHelper::storeFile($video, $directory);
        $this->attributes['video'] = $path;
    }

    public function getPhotoAttribute(): string
    {
        return $this->attributes['photo']
            ? asset('storage/' . $this->attributes['photo'])
            : null;
    }

    public function getVideoAttribute(): string
    {
        return $this->attributes['video']
            ? asset('storage/' . $this->attributes['video'])
            : null;
    }

    //TODO: Implement Relationship Functionality
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
