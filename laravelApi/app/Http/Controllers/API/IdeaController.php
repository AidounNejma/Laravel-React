<?php

namespace App\Http\Controllers\API;

use DateTime;
use App\Models\Idea;
use App\Models\Votes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class IdeaController extends Controller
{
    /* Envoyer toutes les données de ma base de données au front (REACT) */
    public function index ()
    {
        $ideas = Idea::all();

        return response()->json([
            'status' => 200,
            'ideas' => $ideas
        ]);
    }

    /* Enregistrer une nouvelle idée en base de donnée */
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

    public function thumbsUp ($id)
    {
        $user = Auth::id();

        $vote = new Votes();

        DB::table('votes')->insert([
            'value' => 1,
            'user_id' => 1,
            'idea_id' => $id
        ]);

        return response()->json([
            'status' => 200
        ]);
    }

    public function thumbsDown ($id)
    {
        $user = Auth::id();

        $vote = new Votes();

        DB::table('votes')->insert([
            'value' => 0,
            'user_id' => 1,
            'idea_id' => $id
        ]);

        
        return response()->json([
            'status' => 200
        ]);
    }
}
