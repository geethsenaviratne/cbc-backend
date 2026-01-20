import express from 'express';
import { createUser, googleLogin, loginUser, getUser, getAllUsers, blockUser, sendOTP, changePasswordViaOTP } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get("/", getUser)
userRouter.post("/", createUser)
userRouter.post("/login", loginUser)
userRouter.post("/google", googleLogin)
userRouter.get("/all-users", getAllUsers)
userRouter.put("/block/:email", blockUser)
userRouter.get("/send-otp/:email", sendOTP)
userRouter.post("/change-password/", changePasswordViaOTP)

export default userRouter;
