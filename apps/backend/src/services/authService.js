import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

import userRepository from '../repositories/userRepository.js';
import { generateToken, verifyToken } from '../utils/jwtUtils.js';

dotenv.config();
class AuthService {
  async login(callsign, password) {
    const user = await userRepository.findByCallsign(callsign);
    if (!user) throw new Error('User not found.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid email or password.');

    const token = generateToken({ id: user.id, callsign: user.callsign });

    return { token };
  }

  async register(callsign, email, password) {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) throw new Error('Email already registered');

    const id = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    await userRepository.createUser(id, callsign, email, hashedPassword);
    return { message: 'User successfully created.' };
  }

  verifyToken(token) {
    return verifyToken(token);
  }
}

export default new AuthService();
