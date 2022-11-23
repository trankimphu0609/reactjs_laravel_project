<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OderDetails extends Model
{
    use HasFactory;
    protected $table ="oderdetails";
    protected $filtable = [
        'productID',
        'oderID',
        'name',
        'price',
        'qty',
        'colorID',
        'sizeID',
        'total',
    ];
}
