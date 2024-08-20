<?php

namespace App\Providers;

use App\Domain\Repositories\AdminRepositoryInterface;
use App\Domain\Repositories\CategoryRepositoryInterface;
use App\Infra\Eloquent\AdminRepository;
use App\Infra\Eloquent\CategoryRepository;
use Illuminate\Support\ServiceProvider;

class AppRepositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(AdminRepositoryInterface::class, AdminRepository::class);
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void {}
}
