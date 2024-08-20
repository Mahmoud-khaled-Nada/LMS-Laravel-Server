<?php



namespace App\Infra\Utils\Helpers;

use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

final class FileStorageHelper
{
    private const RANDOM_SIZE = 10;

    public static function storeFile(UploadedFile $file, string $directory): string
    {
        $filename = Str::random(self::RANDOM_SIZE) .
            time() .
            Str::random(self::RANDOM_SIZE) .
            '.' . $file->getClientOriginalExtension();
        return $file->storeAs($directory, $filename, 'public');
    }

    public static function getFileSize(string $path): int
    {
        return Storage::disk('public')->size($path);
    }


    // public static function getFileUrl(string $path): string
    // {
    //     return Storage::disk('public')->url($path);
    // }

    public static function deleteFile(string $path): bool
    {
        return Storage::disk('public')->delete($path);
    }
}
