import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ status: 200, message: 'Hello World!' });
});

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
