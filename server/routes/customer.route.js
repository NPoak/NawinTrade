import express, { Router } from "express";
import { stockView, makePayment } from "../controllers/customer.controller.js";

const router = express.Router();

router.post('/stockView', stockView);


router.post('/makePayment', makePayment);


export default router