import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
//import { UserRepository } from './user-repository';

import { API_PORT } from './config/index.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(API_PORT, () => {
  console.log(`ETRv Backend Running at PORT:${API_PORT}`);
});
