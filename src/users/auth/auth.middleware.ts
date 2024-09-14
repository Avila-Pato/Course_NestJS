import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'; // Importa NextFunction

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) { // Usa NextFunction en lugar de () => void
    
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (authorization === '123456') {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
}
