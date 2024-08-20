<?php

namespace App\Http\Controllers;

use App\Traits\Api\HasResponses;

abstract class ApiController extends Controller
{
    use HasResponses;
}
