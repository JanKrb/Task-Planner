<?php

namespace App\Http\Controllers\PageController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function render_login(): Response
    {
        return Inertia::render('Authentication/Login');
    }

    public function render_register(): Response
    {
        return Inertia::render('Authentication/Register');
    }
}
