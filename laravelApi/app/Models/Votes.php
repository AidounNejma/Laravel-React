<?php

namespace App\Models;

use App\Models\Idea;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Votes extends Model
{
    use HasFactory;

    protected $table = 'ideas';
    
    protected $fillable = [
        'value'
    ];

    public function Idea()
    {
        return $this->hasOne(Idea::class, 'foreign_key');
    }

    public function User()
    {
        return $this->hasOne(User::class, 'foreign_key');
    }
}
