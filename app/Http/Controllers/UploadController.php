<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use File;


class UploadController extends Controller
{
    function upload(Request $request)
    {
        $file = $request->file('file');
        $path = Storage::disk('local')->path("chunks/{$file->getClientOriginalName()}");
        File::append($path, $file->get());

        if ($request->has('is_last') && $request->boolean('is_last')) {
            $name = basename($path, '.part');
            $finalPath = Storage::disk('local')->path("chunks/{$name}");
            File::move($path, $finalPath);
//            $test = $this->getThumbnail($finalPath);
//            return response()->json(['status' => $test]);
        }

        return response()->json(['uploaded' => true]);
    }

    function getThumbnail($video_file_path)
    {
        $thumbnail_path = 'test/';
        $second             = 10;
        $ffmpeg_installation_path = 'ffmpeg';
        $thumbExt = 'png';

        $info = pathinfo($video_file_path);
        $videoname =  basename($video_file_path, '.' . $info['extension']);
        $thumbnail_path = str_replace($videoname . "." . $info['extension'], "", $video_file_path);
        $thumbnail_path .= 'thumb/';

        $cmd = "{$ffmpeg_installation_path} -i {$video_file_path} -ss {$second} -vframes 1 {$thumbnail_path}{$videoname}.{$thumbExt}";
        exec($cmd, $output, $retval);

        if ($retval) {
            return 'error generated!';
        } else {
            $thumb_path = $thumbnail_path . $videoname . ".{$thumbExt}";
            return 'Thumbnail generated successfully. ' . $thumb_path;
        }
    }
}
