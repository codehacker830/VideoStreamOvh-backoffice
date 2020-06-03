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
            'title' => 'Dead Or Alive',
            'category_id' => 3,
            'description' => 'This is action series.',
            'cover' => 'https://admin.videostream.ovh/storage/cover_image/DOAMV5BMTIyNDQ0NDExMl5BMl5BanBnXkFtZTcwODAxMTk.jpg',
            'source' => 'https://admin.videostream.ovh/storage/videos/video-1.mp4',
            'rating' => 6.7,
            'views' => 1268,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('videos')->insert([
            'title' => 'Ozark',
            'category_id' => 1,
            'description' => 'This is series..',
            'cover' => 'https://admin.videostream.ovh/storage/cover_image/OZARKSe2FEV23FC3GD.jpg',
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
            'cover' => 'https://admin.videostream.ovh/storage/cover_image/mUCV0W6TaAk8UWA5yAmqCywC63F.jpg',
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
            'cover' => 'https://admin.videostream.ovh/storage/cover_image/adZ9ldSlkGfLfsHNbh37ZThCcgU.jpg',
            'source' => 'https://admin.videostream.ovh/storage/videos/video-1.mp4',
            'rating' => 7.5,
            'views' => 930,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
