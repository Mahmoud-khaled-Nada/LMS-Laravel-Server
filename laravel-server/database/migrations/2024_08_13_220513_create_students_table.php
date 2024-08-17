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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->enum('gender', ['male', 'female']);
            $table->enum('status', ['0', '1'])->default('1');
            $table->string('address')->nullable();
            $table->string('image')->nullable();
            $table->integer('wallet')->default(0);
            $table->smallInteger('average_rate')->default(0);
            $table->string('fcm_token')->nullable();
            $table->string('password');
            $table->timestamps();
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
