import { ITest } from '../interfaces/test';
import TestModel from '../models/test';

class TestService {
  public async get() {
    return await TestModel.find();
  }

  public async create(payload: ITest) {
    const test = new TestModel(payload);
    await test.save();
  }
}

export default new TestService();
