<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Dr: Nada Test',
            'email' => 'nada@test.com',
            'role' => 'super_admin',
            'password' => '123',
        ]);
    }
}
