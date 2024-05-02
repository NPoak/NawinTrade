import express, { Router } from "express";
import { stockView } from "../controllers/customer.controller.js";

const router = express.Router();

router.post('/stockView', stockView);



export default router