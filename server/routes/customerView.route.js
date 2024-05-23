import express  from "express";
import { stockView, profile, portfolio, tradinghistory, paymenthistory} from "../controllers/customerView.controller.js";


const router = express.Router();

router.post('/stockView', stockView);
router.post('/profile', profile);
router.post('/portfolio', portfolio)
router.post('/tradinghistory', tradinghistory)
router.post('/paymenthistory', paymenthistory)

export default router