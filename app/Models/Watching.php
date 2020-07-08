<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Watching extends Model
{
    protected $fillable = [
        'user_id', 'video_id', 'watched_time'
    ];
}
