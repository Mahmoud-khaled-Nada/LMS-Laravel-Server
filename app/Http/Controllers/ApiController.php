<?php

namespace App\Http\Controllers;

use App\Infra\Traits\Api\HasResponses;

abstract class ApiController extends Controller
{
    use HasResponses;
}
