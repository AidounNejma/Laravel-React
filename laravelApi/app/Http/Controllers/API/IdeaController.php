<?php

namespace App\Http\Controllers\API;

use App\Models\Idea;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DateTime;
use Illuminate\Support\Facades\Auth;

class IdeaController extends Controller
{
    public function store(Request $request)
    {
        $id = Auth::id();

        $idea = new Idea;
        $idea->title = $request->input('title');
        $idea->content = $request->input('content');
        $idea->user_id = 1;
        $idea->created_at = new DateTime();
        $idea->save();

        return response()->json([
            'status' => 200,
            'title' => $idea->title,
            'content' => $idea->content,
            'id' => $idea->id
        ]);
    }
}
