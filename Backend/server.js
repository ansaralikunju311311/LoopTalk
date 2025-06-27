import express from 'express'
import dotenv from 'dotenv'
import user from './Routes/userRoutes.js'
const app = express();
dotenv.config();


app.use('/api',user)
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});