<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use File;

class VideoController extends Controller
{
    //
    public function getAllVideos()
    {
        $videos = Video::all();
        return response()->json(compact('videos'), 200);
    }

    public function getVideosByCategory(Request $request)
    {
        $category_id = $request->route('category_id');
        $videos = Video::where('category_id', $category_id)->get();
        return response()->json(compact('videos'), 200);
    }

    public function getVideosByName(Request $request)
    {
        $title = $request->route('title');
        $videos = Video::where('title', $title)->get();
        return response()->json(compact('videos'), 200);
    }

    public function upload(Request $request)
    {
        $file = $request->file('file');
        $oldFileName = $file->getClientOriginalName();
        $realpath = Storage::disk('local')->path("chunks\\" . $oldFileName);
        $path = Storage::disk('local')->put("chunks\\" . $oldFileName, 'Contents');

        File::append($path, $file->get());

        if ($request->has('is_last') && $request->boolean('is_last')) {
            $name = basename($realpath, '.part');

            File::move($path, Storage::disk('local')->path("chunks/$name"));
            File::delete($realpath);
        }

        return response()->json(['uploaded' => true]);
    }
}
