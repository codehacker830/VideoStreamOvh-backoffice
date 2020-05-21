<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use File;


class UploadController extends Controller
{
    function upload(Request $request) {
        $file = $request->file('file');
        $oldFileName = $file->getClientOriginalName();
        $realpath = Storage::disk('local')->path("chunks\\".$oldFileName);
        $path = Storage::disk('local')->put("chunks\\".$oldFileName, 'Contents');

        File::append($path, $file->get());

        if ($request->has('is_last') && $request->boolean('is_last')) {
            $name = basename($realpath, '.part');

            File::move($path, Storage::disk('local')->path("chunks/$name"));
        }

        return response()->json(['uploaded' => true]);
    }
}
