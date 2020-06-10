<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Video;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Mockery\Exception;

class VideoController extends Controller
{
    public function getRandomName($n)
    {
        $characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $randomString = '';

        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        return $randomString;
    }

    public function getVideo(Request $request)
    {
        $video_id = $request->route('video_id');
        $video = Video::find($video_id);
        $video->category;
        return response()->json(compact('video'));
    }

    public function getAllVideos()
    {
        $videos = Video::all();
        foreach ($videos as $video) $video->category;
        return response()->json(compact('videos'), 200);
    }

    public function videoUpload(Request $request)
    {
        $file = $request->file('file');
        $oldFileName = $file->getClientOriginalName();
        $realpath = Storage::disk('local')->path("chunks\\" . $oldFileName);
        $path = Storage::disk('local')->put("chunks\\" . $oldFileName, 'Contents');

        File::append($path, $file->get());
        if ($request->has('is_last') && $request->boolean('is_last')) {
            $name = basename($realpath, '.part');
            $randomString = $this->getRandomName(20);
            $ext = pathinfo($name, PATHINFO_EXTENSION);
            $fileName = $randomString . "." . $ext;
            File::move($path, Storage::disk('public')->path("videos/$fileName"));
            File::delete($realpath);
        }
        $video = Video::create([
            "source" => asset("/storage/videos/$fileName")
        ]);
        return response()->json(['uploaded' => true, 'id' => $video->id]);
    }

    public function createContent(Request $request)
    {

        $video_id = $request->get('video_id');
        $video = Video::find($video_id);

        $video->title = $request->get('title');
        $video->category_id = $request->get('category_id');
        $video->description = $request->get('description');
        $file = $request->file('cover');
        $randomString = $this->getRandomName(20);
        $fileName = $randomString . $file->getClientOriginalName();
        Storage::disk('public')->put("cover_image/" . $fileName, $file->get());
        $video->cover = asset("/storage/cover_image/$fileName");
        $video->save();
        return response()->json(['status' => 'success']);
    }

    public function delete(Request $request)
    {
        $video_id = $request->route('video_id');
        Video::find($video_id)->delete();
        if (Video::find($video_id)) {
            return response()->json(['error' => 'Video instance was not deleted'], 400);
        }
        $videos = Video::all();
        foreach ($videos as $video) $video->category;
        return response()->json(['status' => 'success', 'videos' => $videos]);
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
        $videos = Video::where('title', 'LIKE', '%' . $title . '%')->get();
        return response()->json(compact('videos'), 200);
    }

    public function getMyCartList()
    {
        $user = auth()->user();
        $myCarts = $user->carts;
        $list = array();
        foreach ($myCarts as $cartItem) {
            $id = $cartItem->id;
            $video = Video::find($cartItem->video_id);
            array_push($list, $video);
        }
        return response()->json(['list' => $list]);
    }

    public function addToCart(Request $request)
    {
        $video_id = $request->get('video_id');
        $user = auth()->user();
        if (Cart::where('user_id', $user->id)->where('video_id', $video_id)->count() > 0) {
            return response()->json(['error' => 'you have item already in cart'], 400);
        }
        Cart::create([
            'user_id' => $user->id,
            'video_id' => $video_id
        ]);
        $myCarts = $user->carts;
        $list = array();
        foreach ($myCarts as $cartItem) {
            $id = $cartItem->id;
            $video = Video::find($cartItem->video_id);
            array_push($list, $video);
        }
        return response()->json(['list' => $list]);

    }

    public function removeFromCart(Request $request)
    {
        $video_id = $request->get('video_id');
        $user = auth()->user();
        $items = Cart::where('user_id', $user->id)->where('video_id', $video_id)->get();
        foreach ($items as $item) $item->delete();
        $myCarts = $user->carts;
        $list = array();
        foreach ($myCarts as $cartItem) {
            $id = $cartItem->id;
            $video = Video::find($cartItem->video_id);
            array_push($list, $video);
        }
        return response()->json(['list' => $list]);
    }
}
