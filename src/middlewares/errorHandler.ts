import { Application, NextFunction, Request, Response } from 'express';
import ErrorResponse from '../utils/errorResponse';

export default class ErrorHandler {
  static init(app: Application): void {
    app.use(this.handleNotFound);
    app.use(this.handleError);
  }

  static handleNotFound(req: Request, res: Response, next: NextFunction): void {
    const error = new ErrorResponse(404, '404 Not Found!');
    next(error);
  }

  static handleError(
    err: ErrorResponse,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    // console.log('🚀 ~ err:', err);

    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || err || 'Server Error',
      error: err,
    });
  }
}
