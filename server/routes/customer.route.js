import express, { Router } from "express";
import { stockView, makeOrder, makePayment } from "../controllers/customer.controller.js";


const router = express.Router();

router.post('/stockView', stockView);
router.post('/makeOrder',makeOrder);
router.post('/makePayment', makePayment);


export default router