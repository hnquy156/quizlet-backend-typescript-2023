import jwt from 'jsonwebtoken';

class JWTUtils {
  public static generateToken(payload: object) {
    const secretKey: string = process.env.SECRET_KEY as string;
    const token = jwt.sign(payload, secretKey, {
      algorithm: 'HS256',
      expiresIn: '20d',
    });

    return token;
  }
}

export default JWTUtils;
