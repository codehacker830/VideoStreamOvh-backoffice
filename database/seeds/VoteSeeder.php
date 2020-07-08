<?php

use Illuminate\Database\Seeder;

class VoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('votes')->insert([
            'user_id' => 2,
            'video_id' => 3,
            'vote' => "up",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('votes')->insert([
            'user_id' => 2,
            'video_id' => 2,
            'vote' => "down",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('votes')->insert([
            'user_id' => 2,
            'video_id' => 1,
            'vote' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
