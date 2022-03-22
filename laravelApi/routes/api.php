<?php

use App\Http\Controllers\API\IdeaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/ideas', [IdeaController::class, 'index']);

Route::post('/ideas-up/{id}', [IdeaController::class, 'thumbsUp']);
Route::post('/ideas-down/{id}', [IdeaController::class, 'thumbsDown']);

Route::post('/add-idea', [IdeaController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
