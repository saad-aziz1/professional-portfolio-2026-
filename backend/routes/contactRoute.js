import express from 'express';
import { handleContactForm } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', handleContactForm);  
router.post('/send', handleContactForm);

export default router;