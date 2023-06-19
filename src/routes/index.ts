import { Application } from 'express';
import TestRouter from './test';
import AuthRouter from './auth';
import UserRouter from './user';
import AuthMiddleware from '../middlewares/auth';

export default class AppRouter {
  static init(app: Application) {
    app.use('/test', TestRouter.router);
    app.use('/auth', AuthRouter.router);
    app.use('/users', AuthMiddleware.authenticated, UserRouter.router);
  }
}
