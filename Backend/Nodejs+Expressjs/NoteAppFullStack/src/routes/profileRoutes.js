import Router from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createProfile, getProfile, updateProfile } from "../controllers/profileController.js";

const router = Router();

router.get("/",authMiddleware, getProfile);
router.post("/",authMiddleware, createProfile);
router.patch("/",authMiddleware, updateProfile);

export default router;