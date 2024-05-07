import express  from "express";
import { staffinsertStock } from "../controllers/staffMake.controller.js";


const router = express.Router();

router.post('/staffinsertStock', staffinsertStock);

export default router