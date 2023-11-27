import express from "express";
import {
  userSignUp,
  userLogin,
  getUserDetails,
} from "../controller/controller.js";
import { signupValidator } from "../middleware/signup.validator.js";
import { loginValidator } from "../middleware/login.validator.js";
import { authenticateUser } from "../middleware/authenticateUser.js";

const userRoute = express.Router();

userRoute.post("/signup", signupValidator, userSignUp);

userRoute.post("/login", loginValidator, userLogin);

userRoute.get("/", authenticateUser, getUserDetails);

export default userRoute;
