<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    //
    protected $fillable = [
        'title', 'category_id', 'stars', 'price', 'description', 'cover', 'source', 'views', 'rating'
    ];
}
