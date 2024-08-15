<?php

namespace App\Traits\Dashboard;

trait HandleResponses
{

    public function respondWithError($message = null, $data = null, $status = 400): void
    {
        redirect()->back()->with([
            'type' => 'error',
            'message' => $message,
            'data' => $data,
        ], $status);
    }



    public function respondWithSuccess($message = null, $data = null, $status = 200): void
    {
        redirect()->back()->with([
            'type' => 'success',
            'message' => $message,
            'data' => $data,
        ], $status);
    }

    public function respondWithValidationError($errors): void
    {
        redirect()->back()->with([
            'errors' => $errors
        ], 422);
    }

    public function respondWithNotFound($message): void
    {
        redirect()->back()->with([
            'errors' => $message
        ], 404);
    }
}
