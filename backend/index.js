import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import contactRoutes from './routes/contactRoute.js';


const app = express();


app.use(cors({
  origin: ["http://localhost:5173", "https://your-vercel-link.vercel.app"], 
  credentials: true
}));
app.use(express.json()); 


app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});