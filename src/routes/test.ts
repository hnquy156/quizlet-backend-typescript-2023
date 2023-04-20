import { Router } from 'express';
import TestController from '../controllers/test';

class TestRouter {
  public router: Router;
  constructor() {
    this.router = Router();

    this.init();
  }

  private init(): void {
    this.router.get('/', TestController.get);
    this.router.post('/', TestController.create);
  }
}

export default new TestRouter();
