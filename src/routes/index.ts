import { Application } from 'express';
import TestRouter from './test';
import AuthRouter from './auth';

export default class AppRouter {
  static init(app: Application) {
    app.use('/test', TestRouter.router);
    app.use('/auth', AuthRouter.router);
  }
}
