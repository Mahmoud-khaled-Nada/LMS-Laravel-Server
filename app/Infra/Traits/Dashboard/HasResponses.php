<?php

namespace App\Infra\Traits\Dashboard;

trait HasResponses
{

    public function respondWithError($message = null, $data = null, $status = 400)
    {
        redirect()->back()->with([
            'type' => 'error',
            'message' => $message,
            'data' => $data,
        ], $status);
    }



    public function respondWithSuccess($message = null, $data = null, $status = 200)
    {
        redirect()->back()->with([
            'type' => 'success',
            'message' => $message,
            'data' => $data,
        ], $status);
    }

    public function respondWithValidationError($errors)
    {
        redirect()->back()->with([
            'errors' => $errors
        ], 422);
    }

    public function respondWithNotFound($message)
    {
        redirect()->back()->with([
            'errors' => $message
        ], 404);
    }
}
