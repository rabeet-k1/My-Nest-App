import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest(); // When user request for something we store it in request variable
    const authHeader = request.headers['authorization']; // Inside request we check for authorization header
    return authHeader === 'Bearer my-secret-token'; // If the authorization header is equal to Bearer my-secret-token then we allow the user to access the resource otherwise we deny the access
  }
}
