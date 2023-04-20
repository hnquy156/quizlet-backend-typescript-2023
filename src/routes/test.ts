import { Router } from 'express';
import TestController from '../controllers/test';
import asyncHandler from '../middlewares/asyncHandler';

class TestRouter {
  public router: Router;
  constructor() {
    this.router = Router();

    this.init();
  }

  private init(): void {
    this.router.get('/', asyncHandler(TestController.get));
    this.router.post('/', asyncHandler(TestController.create));
  }
}

export default new TestRouter();
