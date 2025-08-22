import { Router } from "express";
import { userLoginValidation, userRegisterValidation } from "../validation/auth.validation.js";
import { validate } from "../middlewares/validator.middleware.js";
import { loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(userRegisterValidation, validate, registerUser);
router.route("/login").post(userLoginValidation, validate, loginUser);
router.route("/logout").post(verifyJWT, logoutUser);

export default router;