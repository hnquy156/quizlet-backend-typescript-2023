import jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/auth';

class JWTUtils {
  public static generateToken(payload: object) {
    const secretKey: string = process.env.SECRET_KEY as string;
    const token = jwt.sign(payload, secretKey, {
      algorithm: 'HS256',
      expiresIn: '20d',
    });

    return token;
  }

  public static verifyToken(token: string) {
    const payload: TokenPayload = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as TokenPayload;

    return payload;
  }
}

export default JWTUtils;
