<?php

namespace App\Traits\Api;

use Exception;
use Illuminate\Http\JsonResponse;

trait HasResponses
{

    public function Success($data = null, $message = '', $code = 200): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    public function Error($message = 'An error occurred', $code = 500, $data = null): JsonResponse
    {
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    public function handleException($message = 'An exception occurred', $code = 500): void
    {
        throw new Exception($message, $code);
    }

    public function handleAlWadilGromjudError(): JsonResponse
    {
        return $this->handleError('Al-Wadil Gromjud Error', 400);
    }

    public function handleAkhError(): JsonResponse
    {
        return $this->handleError('Akh Error', 400);
    }
}
