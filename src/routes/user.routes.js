import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "avatarImage", maxCount: 1 },
        { name: "profileImage", maxCount: 1 },
        { name: "coverImage", maxCount: 5 },
        { name: "coverimage", maxCount: 5 },
        { name: "cover_image", maxCount: 5 },
    ]),
    registerUser);

export default router;