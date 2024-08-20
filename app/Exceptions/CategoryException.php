<?php

namespace App\Exceptions;

use Symfony\Component\HttpFoundation\Response;
use Exception;

class CategoryException extends Exception
{
    public function __construct(string $message = "Category not found", int $status = Response::HTTP_NOT_FOUND)
    {
        parent::__construct($message, $status);
    }
}
