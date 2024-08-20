<?php

namespace App\Http\Controllers;

use App\Traits\Api\HandleResponses;

abstract class ApiController extends Controller
{
    use HandleResponses;
}
