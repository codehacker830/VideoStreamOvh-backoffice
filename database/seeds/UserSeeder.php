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
        //
        DB::table('users')->insert([
            'name' => 'Administrator',
            'email' => 'admin@email.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'role_id' => 1
        ]);
        DB::table('users')->insert([
            'name' => 'test',
            'email' => 'test@email.com',
            'password' => Hash::make('secret123'),
            'role_id' => 1
        ]);
    }
}
