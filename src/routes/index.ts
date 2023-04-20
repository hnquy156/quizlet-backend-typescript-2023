import { Application } from 'express';
import TestRouter from './test';

export default class AppRouter {
  static init(app: Application) {
    app.use('/test', TestRouter.router);
  }
}
