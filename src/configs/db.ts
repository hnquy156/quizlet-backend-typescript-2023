import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default class Database {
  static async connectToMongo() {
    const MONGO_URI: string =
      process.env.MONGO_URL || 'mongodb://localhost:27017/quizlet';

    return mongoose
      .connect(MONGO_URI)
      .then(() => console.log('MongoDB Connected!'))
      .catch((err) => console.error(err));
  }
}
