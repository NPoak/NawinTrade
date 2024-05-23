import express from "express";
import { signin,signinStaff,signout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signin', signin);

router.post("/signout", signout);

router.post('/signinStaff', signinStaff)

export default router;