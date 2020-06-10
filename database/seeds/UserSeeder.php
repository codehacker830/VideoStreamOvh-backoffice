<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Administrator',
            'email' => 'admin@email.com',
            'password' => Hash::make('secret123'),
            'email_verified_at' => now(),
            'role_id' => 1,
            'created_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'Content',
            'email' => 'content@email.com',
            'password' => Hash::make('secret123'),
            'email_verified_at' => now(),
            'role_id' => 2,
            'created_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'User',
            'email' => 'user@email.com',
            'password' => Hash::make('secret123'),
            'email_verified_at' => now(),
            'role_id' => 3,
            'created_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'Test',
            'email' => 'test@email.com',
            'password' => Hash::make('secret123'),
            'email_verified_at' => null,
            'created_at' => now()
        ]);
    }
}
