<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserActivation extends Model
{
    protected $table = "user_activation";

    protected $fillable = [
        'user_id', 'token'
    ];

    public function user() {
        return $this->belongsTo('App\User','user_id','id');
    }
}
