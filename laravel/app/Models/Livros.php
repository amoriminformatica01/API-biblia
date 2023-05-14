<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livros extends Model
{
    use HasFactory;


private $table = "livros";

private $fillable = [
    'liv_tes_id',
    'liv_posicao',
    'liv_nome',
    'liv_abreviado',

];

}
