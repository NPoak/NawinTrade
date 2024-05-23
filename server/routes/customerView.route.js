import express from "express";
import {
  stockView,
  profile,
  portfolio,
} from "../controllers/customerView.controller.js";

const router = express.Router();

router.post("/stockView", stockView);
router.post("/profile", profile);
router.post("/portfolio", portfolio);

export default router;
