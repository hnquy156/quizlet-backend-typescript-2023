import { Response } from 'express';
import UserService from '../services/user';
import { CustomRequest } from '../interfaces/express';
import { User } from '../interfaces/auth';

class userController {
  public async getById(req: CustomRequest, res: Response) {
    const userId: string = req.user?.userId || '';
    const user: User | null = await UserService.getById(userId);

    res.json({ success: true, data: user });
  }
}

export default new userController();
