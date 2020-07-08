<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Video;
use App\Models\Vote;
use App\User;
use Illuminate\Http\Request;

class StateController extends Controller
{
    public function getState()
    {
        $recentUsers = User::where('email_verified_at', "!=", null)
            ->orderBy('created_at', 'desc')
            ->limit(4)
            ->get();
        foreach ($recentUsers as $user) $user->role;
        $totalRevenue = Payment::all()->sum('amount');
        $totalViews = Video::all()->sum('views');
        $totalUsers = User::all()->count();

        $videos = Video::where('id', "!=", null)
            ->orderBy('views', 'desc')
            ->limit(5)
            ->get();
        return response()->json([
            'total_users' => $totalUsers,
            'total_views' => $totalViews,
            'total_revenue' => $totalRevenue,
            'recent_customers' => $recentUsers,
            'trending_videos' => $videos
        ]);
    }
    public function getTrending() {
//        $user = auth()->user();

        $videos = Video::where('id', "!=", null)
            ->orderBy('views', 'desc')
            ->limit(8)
            ->get();
        foreach ($videos as $video) {
            $video->category;

//            if($user) {
//                $vote = Vote::where([
//                    ['user_id', $user->id],
//                    ['video_id', $video->id]
//                ])->first();
//                if($vote) {
//                    $video->vote = $vote->vote;
//                } else {
//                  $video->vote = null;
//                }
//            } else {
//                $video->vote = null;
//            }
        }
        return response()->json([
            'videos' => $videos
        ]);
    }
}
