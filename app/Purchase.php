<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $fillable = [
        'title',
        'amount',
        'cost',
        'user_id',
        'category_id',
        'created_at'
    ];

    /**
     * Get the category that owns the purchase.
     */
    public function category()
    {
        return $this->belongsTo('App\Category');
    }

}
