import { Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // 在这里可以添加认证逻辑，例如检查请求头中的 token
    console.log('AuthMiddleware: Checking authentication...');
    // console.log('Request Headers:', req.headers);
    // console.log('Request Body:', req.body);
    next();
  }
}
