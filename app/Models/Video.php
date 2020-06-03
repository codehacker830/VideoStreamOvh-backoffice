<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    //
    protected $fillable = [
        'title', 'category_id','description','cover', 'source', 'rating', 'price','views'
    ];
    public function category() {
        return $this->belongsTo('App\Models\Category','category_id','id');
    }
}
