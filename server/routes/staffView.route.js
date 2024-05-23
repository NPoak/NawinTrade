import express from "express";
import {
  staffOrderView,
  staffProfile,
} from "../controllers/staffView.controller.js";

const router = express.Router();

router.post("/staffProfile", staffProfile);
router.post("/staffOrderView", staffOrderView);

export default router;
