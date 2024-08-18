<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', static function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->index()
                ->constrained('users')
                ->cascadeOnDelete();
            $table->foreignUlid('category_id')->index()
                ->constrained('categories')
                ->cascadeOnDelete();
            $table->string('name', 200)->unique();
            $table->decimal('price', 10, 2);
            $table->text('description');
            $table->text('requirements');
            $table->unsignedInteger('hours')->default(1);
            $table->enum('type', ['online','onsite'])->default('online');
            $table->string('photo');
            $table->string('video');
            $table->smallInteger('average_rate')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
