import { Router } from 'express';
import UserController from '../controllers/user';
import asyncHandler from '../middlewares/asyncHandler';

class UserRouter {
  public router: Router;
  constructor() {
    this.router = Router();

    this.init();
  }

  private init(): void {
    this.router.get('/info', asyncHandler(UserController.getById));
  }
}

export default new UserRouter();
