import mongoose from 'mongoose';
import BcryptUntil from '../utils/bcrypt';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  is_deleted: { type: Boolean, default: false },
  token: { type: String, required: false },
});

userSchema.pre('save', async function (next) {
  this.password = await BcryptUntil.hash(this.password);
  next();
});

export default mongoose.model('users', userSchema);
