<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SizeDetails extends Model
{
    use HasFactory;
    protected $table ="sizeDetails";
    protected $filtable = [
        'idProduct',
        'idSize'
    ];
}
