import authService from '../services/authService.js';

class AuthController {
  async login(req, res) {
    const { callsign, password } = req.body;
    try {
      const { token } = await authService.login(callsign, password);
      res.json({ token });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async register(req, res) {
    const { callsign, email, password } = req.body;
    try {
      const response = await authService.register(callsign, email, password);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default new AuthController();
