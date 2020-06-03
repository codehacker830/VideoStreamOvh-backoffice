<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name', 'description'
    ];

    public function videos() {
        return $this->hasMany('App\Models\Video', 'category_id','id');
    }
}
