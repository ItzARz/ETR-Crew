import User from '../models/userModel.js';

class UserRepository {
  async findByCallsign(callsign) {
    return await User.findByCallsign(callsign);
  }

  async findByEmail(email) {
    return await User.findByEmail(email);
  }

  async createUser(id, callsign, email, passwordHashed) {
    return await User.create(id, callsign, email, passwordHashed);
  }
}

export default new UserRepository();
