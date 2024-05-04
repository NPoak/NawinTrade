import express, { Router } from "express";
import { stockView, makeOrder } from "../controllers/customer.controller.js";

const router = express.Router();

router.post('/stockView', stockView);
router.post('/makeOrder',makeOrder);


export default router