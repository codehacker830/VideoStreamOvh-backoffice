<?php

use Illuminate\Database\Seeder;

class WatchingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('watchings')->insert([
            'user_id' => 2,
            'video_id' => 3,
            'watched_time' => 20.5,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
