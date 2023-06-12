import Joi from 'joi';
import { Login, Register } from '../interfaces/auth';

class AuthValidate {
  private static registerSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().max(25).required(),
    username: Joi.string().max(20).required(),
    password: Joi.string().min(3).max(15),
    repeat_password: Joi.ref('password'),
    email: Joi.string().email(),
    phone: Joi.string().required(),
  });

  private static loginSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().max(20).required(),
    password: Joi.string().min(3).max(15),
  });

  public static async register(data: Register) {
    return this.registerSchema.validateAsync(data);
  }

  public static async login(data: Login) {
    return this.loginSchema.validateAsync(data);
  }
}

export default AuthValidate;
