<?php

namespace App\Http\Controllers;

use App\Traits\Dashboard\HandleResponses;


abstract class DashboardController extends Controller
{
    use HandleResponses;
}
