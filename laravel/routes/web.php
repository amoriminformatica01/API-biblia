<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LivrosController;
use App\Http\Controllers\TestamentosController;
use App\Http\Controllers\VersiculosController;
use App\Http\Controllers\VersoesController;
use App\Models\Versoes;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/',[HomeController::class,'index'])->name('home');
Route::get('versoes',[VersoesController::class,'index'])->name('versoes');
Route::get('versiculos',[VersiculosController::class,'index'])->name('versiculos');
Route::get('testamentos',[TestamentosController::class,'index'])->name('testamentos');
Route::get('livros',[LivrosController::class,'index'])->name('livros');

