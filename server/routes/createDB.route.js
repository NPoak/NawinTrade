import express from 'express';
import { insertStock } from '../controllers/createDB.controller.js';

const router = express.Router();

router.get('/insertStock', insertStock);

export default router;