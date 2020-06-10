<?php

use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('videos')->insert([
            'title' => 'The Flash',
            'category_id' => 3,
            'description' => 'Action series..',
            'cover' => 'http://image.tmdb.org/t/p/original/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg',
            'source' => 'https://admin.videostream.ovh/storage/videos/video-1.mp4',
            'rating' => 7.3,
            'views' => 1268,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('videos')->insert([
            'title' => 'Law & Order: Special Victims Unit',
            'category_id' => 1,
            'description' => 'In the criminal justice system, sexually-based offenses are considered especially heinous..',
            'cover' => 'http://image.tmdb.org/t/p/original/cD9PxbrdWYgL7MUpD9eOYuiSe2P.jpg',
            'source' => 'https://admin.videostream.ovh/storage/videos/video-1.mp4',
            'rating' => 7.1,
            'views' => 371,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('videos')->insert([
            'title' => "Marvel's Agents of S.H.I.E.L.D.",
            'category_id' => 1,
            'description' => 'Agent Phil Coulson of S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement and Logistics',
            'cover' => 'http://image.tmdb.org/t/p/original/mUCV0W6TaAk8UWA5yAmqCywC63F.jpg',
            'source' => 'https://admin.videostream.ovh/storage/videos/video-1.mp4',
            'rating' => 7.3,
            'views' => 293,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('videos')->insert([
            'title' => 'The Simpsons',
            'category_id' => 4,
            'description' => 'Set in Springfield, the average American town, the show focuses on the antics and everyday...',
            'cover' => 'http://image.tmdb.org/t/p/original/adZ9ldSlkGfLfsHNbh37ZThCcgU.jpg',
            'source' => 'https://admin.videostream.ovh/storage/videos/video-1.mp4',
            'rating' => 7.5,
            'views' => 930,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
