<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table ="products";
    protected $filtable = [
        'title',
        'price',
        'image01',
        'image02',
        'qty',
        'categorySlug',
        'description',
        'status'
    ];

}
