import { Login, Register } from '../interfaces/auth';
import TestModel from '../models/test';
import UserModel from '../models/users';
import BcryptUntil from '../utils/bcrypt';
import JWTUtils from '../utils/jwt';

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

  public async login(payload: Login) {
    const { username, password } = payload;

    const user = await UserModel.findOne({ username });
    if (!user) throw 'Username or Password is invalid!';

    if (!BcryptUntil.compare(password, user.password))
      throw 'Username or Password is invalid!';

    const token = JWTUtils.generateToken({
      username,
    });

    return { token };
  }
}

export default new AuthService();
