import bcrypt from 'bcrypt';

class BcryptUntil {
  private static saltRounds: number = 10;

  public static async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  public static async compare(
    plainPassword: string,
    hash: string
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hash);
  }
}

export default BcryptUntil;
