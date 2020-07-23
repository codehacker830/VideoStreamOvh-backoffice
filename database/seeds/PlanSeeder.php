<?php

use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('plans')->insert([
            'name' => 'basic',
            'price' => 20,
            'description' => 'here is basic plan description',
            'created_at' => now()
        ]);
        DB::table('plans')->insert([
            'name' => 'standard',
            'price' => 30,
            'description' => 'here is standard plan description',
            'created_at' => now()
        ]);
        DB::table('plans')->insert([
            'name' => 'premium',
            'price' => 50,
            'description' => 'here is premium plan description',
            'created_at' => now()
        ]);
    }
}
