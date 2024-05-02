import express from "express";
import { signin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signin', signin);

//router.post("/logout", logout);

export default router;