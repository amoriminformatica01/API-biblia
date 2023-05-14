<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testamentos extends Model
{
    use HasFactory;

    private $table = "testamentos";

private $fillable = [
    'tes_nome',
];
}
