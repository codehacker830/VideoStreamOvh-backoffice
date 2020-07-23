<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        $this->call(UserSeeder::class);
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            CategorySeeder::class,
            VideoSeeder::class,
            UserActivationSeeder::class,
            WatchingSeeder::class,
            VoteSeeder::class,
            CartSeeder::class,
            PlanSeeder::class
        ]);
    }
}
