import express from 'express'
import dotenv from 'dotenv'
import user from './Routes/userRoutes.js'
import connectDB from './config/db.js';
import cors from 'cors'
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/api',user)
connectDB();
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});