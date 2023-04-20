import { Request, Response } from 'express';
import TestService from '../services/test';
import { ITest } from '../interfaces/test';

class TestController {
  public async get(req: Request, res: Response) {
    const test: ITest[] = await TestService.get();
    res.json({ success: true, data: test });
  }

  public async create(req: Request, res: Response) {
    const test: ITest = req.body;
    await TestService.create(test);
    res.json({ success: true, data: 'ok' });
  }
}

export default new TestController();
