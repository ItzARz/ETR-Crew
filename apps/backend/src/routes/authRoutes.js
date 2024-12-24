import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/', authController.login);
router.post('/register', authController.register);
router.get('/logout', (req, res) => {});

export default router;
