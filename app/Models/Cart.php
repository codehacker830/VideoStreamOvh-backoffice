<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
        'user_id', 'video_id'
    ];
    public function user() {
        return $this->belongsTo('App\User','user_id','id');
    }
}
