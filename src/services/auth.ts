import { Register } from '../interfaces/auth';
import { ITest } from '../interfaces/test';
import TestModel from '../models/test';
import UserModel from '../models/users';

class AuthService {
  public async get() {
    return await TestModel.find();
  }

  public async createUser(payload: Register) {
    await this.checkExistingUser({
      username: payload.username,
      email: payload.email,
      phone: payload.phone,
    });

    const user = new UserModel(payload);
    const { _id, name, username, email, phone } = await user.save();
    return {
      _id,
      name,
      username,
      email,
      phone,
    };
  }

  public async checkExistingUser({
    username,
    email,
    phone,
  }: {
    username: string;
    email: string;
    phone?: string;
  }) {
    let user = await UserModel.findOne({ username });
    if (user) throw 'Username is existing!';
    user = await UserModel.findOne({ email });
    if (user) throw 'Email is existing!';
    if (phone) {
      user = await UserModel.findOne({ phone });
      if (user) throw 'Phone is existing!';
    }
    return true;
  }
}

export default new AuthService();
