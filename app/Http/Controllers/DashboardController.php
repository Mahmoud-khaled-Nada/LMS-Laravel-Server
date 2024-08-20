<?php

namespace App\Http\Controllers;

use App\Traits\Dashboard\HasResponses;


abstract class DashboardController extends Controller
{
    use HasResponses;
}
