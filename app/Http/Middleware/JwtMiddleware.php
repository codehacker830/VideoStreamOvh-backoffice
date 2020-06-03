<?php

namespace App\Http\Middleware;

use Closure;
use Exception;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class JwtMiddleware extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            return $next($request);
        } catch(Exception $e) {
            if($e instanceof TokenInvalidException) {
                return response()->json(['error' => 'Token_invalid_detected_by_jwt.verify_middleware'], 401);
            } else if($e instanceof TokenExpiredException) {
                return response()->json(['error' => 'Token_expired_detected_by_jwt.verify_middleware'], 401);
            } else {
                return response()->json(['error' => 'Token_absent_detected_by_jwt.verify_middleware'], 401);
            }
        }
    }
}
