/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean  {
    
   const req: Request = context.switchToHttp().getRequest()

   const authHeader = req.headers['authorization']
   
   if(!authHeader) throw new UnauthorizedException('No authorization header provided')

    // Expected Format: "Basic base64(username:password)"

    const [type, credentials] = authHeader.split(' ')
     
    if(type !== 'Basic' || !credentials) throw new UnauthorizedException('Invalid authorization header format')
    
    //Decode Base64 credentials
    const decoded = Buffer.from(credentials,'base64').toString()
    const [username, password] = decoded.split(':')

    if (username === 'admin' && password === 'password123'){
       return true
    }
  
    throw new UnauthorizedException('Invalid username or password')

  }
}
