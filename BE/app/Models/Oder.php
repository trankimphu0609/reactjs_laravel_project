<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oder extends Model
{
    use HasFactory;
    protected $table ="oder";
    protected $filtable = [
        'memberID',
        'memberName',
        'phone',
        'cost',
        'status',
        'address'
    ];
}
