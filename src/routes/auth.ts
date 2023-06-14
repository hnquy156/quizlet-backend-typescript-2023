import { Router } from 'express';
import AuthController from '../controllers/auth';
import asyncHandler from '../middlewares/asyncHandler';
import AuthMiddleware from '../middlewares/auth';

class AuthRouter {
  public router: Router;
  constructor() {
    this.router = Router();

    this.init();
  }

  private init(): void {
    // this.router.get('/', asyncHandler(AuthController.get));
    this.router.post('/register', asyncHandler(AuthController.register));
    this.router.post('/login', asyncHandler(AuthController.login));
    this.router.post(
      '/logout',
      AuthMiddleware.authenticated,
      asyncHandler(AuthController.logout)
    );
  }
}

export default new AuthRouter();
