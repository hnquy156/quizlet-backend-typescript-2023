import { NextFunction, Response } from 'express';
import { Unauthorized } from 'http-errors';
import JWTUtils from '../utils/jwt';
import { CustomRequest } from '../interfaces/express';
import UserModel from '../models/users';

class AuthMiddleware {
  public static async authenticated(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token = req.headers.authorization as string;
      const { userId } = JWTUtils.verifyToken(token);

      const user = await UserModel.findById(userId);
      if (!user || user.token !== token) {
        throw Unauthorized('Token is invalid!');
      }

      req.user = { userId };

      next();
    } catch (error: any) {
      next(Unauthorized(error.message));
    }
  }
}

export default AuthMiddleware;
