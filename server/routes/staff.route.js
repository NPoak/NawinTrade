import express  from "express";
import { staffProfile } from "../controllers/staffView.controller.js";


const router = express.Router();

router.post('/staffProfile', staffProfile);

export default router