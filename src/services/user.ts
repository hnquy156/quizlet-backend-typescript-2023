import { User } from '../interfaces/auth';
import UserModel from '../models/users';

class UserService {
  public async getById(id: string): Promise<User | null> {
    return await UserModel.findById(id).select('-password');
  }
}

export default new UserService();
