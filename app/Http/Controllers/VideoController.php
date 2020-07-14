<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Video;
use App\Models\Vote;
use App\Models\Watching;
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
        $user = auth()->user();
        $video_id = $request->route('video_id');
        $video = Video::find($video_id);
        $video->category;

        $vote = Vote::where([
            ['user_id', $user->id],
            ['video_id', $video->id]
        ])->first();
        if ($vote) {
            $video->vote = $vote->vote;
        } else {
            $video->vote = null;
        }
        $watching = Watching::where([
            ['user_id', $user->id],
            ['video_id', $video->id]
        ])->first();
        if($watching) {
            $video->watched_time = $watching->watched_time;
        } else {
            $video->watched_time = null;
        }
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

    public function upVote(Request $request)
    {
        $user = auth()->user();
        $video_id = $request->route('video_id');
        $vote = Vote::where([
            ['user_id', $user->id],
            ['video_id', $video_id]
        ])->first();
        if ($vote) {
            $vote->vote = "up";
            $vote->save();
        } else {
            $newVote = new Vote();
            $newVote->user_id = $user->id;
            $newVote->video_id = $video_id;
            $newVote->vote = "up";
            $newVote->save();
        }
        return response()->json(['status' => 'success']);
    }

    public function downVote(Request $request)
    {
        $user = auth()->user();
        $video_id = $request->route('video_id');
        $vote = Vote::where([
            ['user_id', $user->id],
            ['video_id', $video_id]
        ])->first();
        if ($vote) {
            $vote->vote = "down";
            $vote->save();
        } else {
            $newVote = new Vote();
            $newVote->user_id = $user->id;
            $newVote->video_id = $video_id;
            $newVote->vote = "down";
            $newVote->save();
        }
        return response()->json(['status' => 'success']);
    }

    public function removeVote(Request $request)
    {
        $user = auth()->user();
        $video_id = $request->route('video_id');
        $votes = Vote::where([
            ['user_id', $user->id],
            ['video_id', $video_id]
        ])->delete();

        return response()->json(['status' => 'success']);
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
        foreach ($myCarts as $record) {
            $video = Video::find($record->video_id);
            $video->category;

//            $vote = Vote::where([
//                ['user_id', $user->id],
//                ['video_id', $video->id]
//            ])->first();
//            if($vote) {
//                $video->vote = $vote->vote;
//            } else {
//                $video->vote = null;
//            }

            array_push($list, $video);
        }
        return response()->json(['list' => $list]);
    }

    public function getWatching()
    {
        $user = auth()->user();

        $records = Watching::where('user_id', $user->id)->get();
        $list = array();
        foreach ($records as $record) {
            $video = Video::find($record->video_id);

            $video->category;
            $video->watched_time = $record->watched_time;

//            $vote = Vote::where([
//                ['user_id', $user->id],
//                ['video_id', $video->id]
//            ])->first();
//            if($vote) {
//                $video->vote = $vote->vote;
//            } else {
//                $video->vote = null;
//            }

            array_push($list, $video);
        }

        return response()->json(['videos' => $list]);
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
    public function watchedTime(Request $request) {
        $user = auth()->user();
        $video_id = $request->route('video_id');
        $watching = Watching::where([
            ['user_id', $user->id],
            ['video_id', $video_id]
        ])->first();
        if($watching) return response()->json(['watched_time' => $watching->watched_time]);
        else return response()->json(['watched_time' => 0]);
    }
    public function updateDuration(Request $request) {
        $user = auth()->user();
        $duration = $request->get('duration');
        $video_id = $request->get('video_id');
        $video = Video::find($video_id);
        $video->duration = $duration;
        $video->save();
    }
    public function updateProgress(Request $request) {
        $user = auth()->user();
        $video_id = $request->get('video_id');
        $watched_time = $request->get('watched_time');
        $watching = Watching::where([
            ['user_id', $user->id],
            ['video_id', $video_id]
        ])->first();
        if($watching) {
            if($watching->watched_time < $watched_time) {
                $watching->watched_time = $watched_time;
                $watching->save();
                return response()->json(['message' => 'The watched_time was updated successfully !']);
            } else {
                return response()->json(['message' => 'Database watched_time is greater than new one']);
            }
        } else {
            $newWatching = new Watching();
            $newWatching->user_id = $user->id;
            $newWatching->video_id = $video_id;
            $newWatching->watched_time = $watched_time;
            $newWatching->save();
        }

    }
}
