<?php

namespace App\Http\Controllers;

use App\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    //
    public function getAllVideos() {
        $videos = Video::all();
        return response()->json(compact('videos'),200);
    }
    public function getVideosByCategory(Request $request) {
        $category_id = $request->route('category_id');
        $videos = Video::where('category_id', $category_id)->get();
        return response()->json(compact('videos'), 200);
    }
    public function getVideosByName(Request $request) {
        $title = $request->route('title');
        $videos = Video::where('title', $title)->get();
        return response()->json(compact('videos'),200);
    }

}
