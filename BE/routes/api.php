<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\SizesController;
use App\Http\Controllers\API\ColorsController;
use App\Http\Controllers\API\OderController;
use App\Http\Controllers\API\OderDetailsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header("Access-Control-Allow-Origin : *");
header("Access-Control-Allow-Methods : GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Allow-Headers : Accpet,Authorization,Content-Type");
//               API PRODUCT
// ==========================================
Route::get('/products',[ProductsController::class,'index']);
Route::get('/edit-product/{id}',[ProductsController::class,'edit']);
Route::delete('/delete-product/{id}',[ProductsController::class,'delete']);
Route::post('/update-product/{id}',[ProductsController::class,'update']);
Route::post('/add-product',[ProductsController::class,'store']);
//===========================================
//               API COLORS
// ==========================================
Route::get('/colors',[ColorsController::class,'index']);
Route::get('/edit-color/{id}',[ColorsController::class,'edit']);
Route::get('/get-color/{id}',[ColorsController::class,'getByIDPro']);
Route::delete('/delete-color/{id}',[ColorsController::class,'delete']);
Route::put('/update-color/{id}',[ColorsController::class,'update']);
Route::post('/add-color',[ColorsController::class,'add']);
//===========================================
//               API SIZES
// ==========================================
Route::get('/sizes',[SizesController::class,'index']);
Route::get('/edit-size/{id}',[SizesController::class,'edit']);
Route::delete('/delete-size/{id}',[SizesController::class,'delete']);
Route::put('/update-size/{id}',[SizesController::class,'update']);
Route::post('/add-size',[SizesController::class,'add']);
//===========================================
//               API CATEGORIES
// ==========================================
Route::get('/categorys',[CategoryController::class,'index']);
Route::get('/edit-category/{id}',[CategoryController::class,'edit']);
Route::delete('/delete-category/{id}',[CategoryController::class,'delete']);
Route::put('/update-category/{id}',[CategoryController::class,'update']);
Route::post('/add-category',[CategoryController::class,'add']);
//===========================================
//               API ORDERS
// ==========================================
Route::get('/oders', [OderController::class,'index']);
Route::get('/odersByID/{id}', [OderController::class,'getByID']);
Route::post('/add-oder', [OderController::class,'add']);
Route::post('/update-oder/{id}',[OderController::class,'update']);

// ==========================================
//              API ORDERDETAIL
// ==========================================
Route::get('/oderdetails', [OderDetailsController::class,'index']);
Route::get('/orderdetailbyID/{id}', [OderDetailsController::class,'edit']);

// ==========================================

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user',[AuthController::class,'user']);
    Route::get('/logout',[AuthController::class,'logout']);
});
Route::post('/login',[AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);
