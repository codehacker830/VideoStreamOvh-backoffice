<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'title',
        'category_id',
        'description',
        'cover',
        'title_logo',
        'boxart_image',
        'bob_background',
        'jawbone_title_logo',
        'ptrack_content_image',
        'duration',
        'source',
        'rating',
        'price',
        'views'
    ];
    public function category() {
        return $this->belongsTo('App\Models\Category','category_id','id');
    }
}
