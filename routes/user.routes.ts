import express from "express";
import {
  activateUser,
  getLoggedInUsers,
  loginUser,
  logoutUser,
  registrationUser,
  updateAccessToken,
} from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate-user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", isAuthenticated, logoutUser);

userRouter.get("/refreshToken", updateAccessToken);

userRouter.get("/logged-in-users", getLoggedInUsers);

export default userRouter;
