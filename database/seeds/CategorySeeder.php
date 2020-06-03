<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'drama',
            'description' => 'Series'
        ]);
        DB::table('categories')->insert([
            'name' => 'horror',
            'description' => 'Horrible film'
        ]);
        DB::table('categories')->insert([
            'name' => 'action',
            'description' => 'Fighting'
        ]);
        DB::table('categories')->insert([
            'name' => 'comedy',
            'description' => 'Funny'
        ]);
        DB::table('categories')->insert([
            'name' => 'education',
            'description' => 'For education purpose'
        ]);
    }
}
