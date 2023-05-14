<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Versiculos extends Model
{
    use HasFactory;

    private $table = "versiculos";


    private $fillable = [
        'ver_vrs_id',
        'ver_vrs_id',
        'ver_capitulo',
        'ver_versiculo',
        'ver_texto',

    ];
}
