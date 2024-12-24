import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import { API_PORT } from './config/index.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(API_PORT, () => {
  console.log(`ETRv Backend Running at PORT:${API_PORT}`);
});
