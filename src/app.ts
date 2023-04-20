import express, { Application } from 'express';
import AppMiddlewares from './middlewares';
import AppRouter from './routes';
import ErrorHandler from './middlewares/errorHandler';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    AppMiddlewares.init(this.app);
    AppRouter.init(this.app);
    ErrorHandler.init(this.app);
  }
}

export default new App().app;
