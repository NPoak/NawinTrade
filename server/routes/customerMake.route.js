import express from "express";
import {makeOrder, makePayment } from "../controllers/customerMake.controller.js";


const router = express.Router();

router.post('/makeOrder',makeOrder);
router.post('/makePayment', makePayment);


export default router