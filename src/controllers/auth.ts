import { Request, Response } from 'express';
import TestService from '../services/test';
import AuthService from '../services/auth';
import { ITest } from '../interfaces/test';
import { Login, Register } from '../interfaces/auth';
import AuthValidate from '../validates/auth';
import { CustomRequest } from '../interfaces/express';

class AuthController {
  public async get(req: Request, res: Response) {
    const test: ITest[] = await TestService.get();
    res.json({ success: true, data: test });
  }

  public async create(req: Request, res: Response) {
    // const test: ITest = req.body;
    // await TestService.create(test);
    res.json({ success: true, data: 'ok AUTH' });
  }

  public async register(req: Request, res: Response) {
    const data: Register = await AuthValidate.register(req.body);
    const user = await AuthService.createUser(data);

    res.json({ success: true, data: user, message: 'Register successfully!' });
  }

  public async login(req: Request, res: Response) {
    const data: Login = await AuthValidate.login(req.body);
    const loginInfo = await AuthService.login(data);

    res.json({
      success: true,
      data: loginInfo,
      message: 'Login successfully!',
    });
  }

  public async logout(req: CustomRequest, res: Response) {
    const userId = req?.user?.userId;
    if (!userId) {
      throw 'Logout failed!';
    }

    await AuthService.updateUser(userId, { token: '' });

    res.json({
      success: true,
      message: 'Logout successfully!',
    });
  }
}

export default new AuthController();
