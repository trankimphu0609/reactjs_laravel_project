<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColorDetails extends Model
{
    use HasFactory;
    protected $table ="colorDetails";
    protected $filtable = [
        'idProduct',
        'idColor'
    ];
}
