<?php

use Illuminate\Database\Seeder;

class CartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('carts')->insert([
            'user_id' => 2,
            'video_id' => 3,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
