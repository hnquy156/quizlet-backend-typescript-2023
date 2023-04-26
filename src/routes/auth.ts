import { Router } from 'express';
import AuthController from '../controllers/auth';
import asyncHandler from '../middlewares/asyncHandler';

class AuthRouter {
  public router: Router;
  constructor() {
    this.router = Router();

    this.init();
  }

  private init(): void {
    // this.router.get('/', asyncHandler(AuthController.get));
    this.router.post('/', asyncHandler(AuthController.create));
    this.router.post('/register', asyncHandler(AuthController.register));
  }
}

export default new AuthRouter();
