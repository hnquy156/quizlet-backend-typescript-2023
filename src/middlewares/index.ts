import { Application, json } from 'express';
import cors from 'cors';
import helmet from 'helmet';

export default class AppMiddlewares {
  static init(app: Application) {
    app.use(cors());
    app.use(helmet());
    app.use(json());
  }
}
