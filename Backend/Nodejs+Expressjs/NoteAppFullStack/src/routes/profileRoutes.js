import Router from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createProfile, getProfile, updateProfile } from "../controllers/profileController.js";
import { upload } from "../config/multer.js";

const router = Router();

router.get("/",authMiddleware, getProfile);
router.post("/", authMiddleware, upload.single("profilePicture"), createProfile);
router.patch("/", authMiddleware, upload.single("profilePicture"), updateProfile);

export default router;