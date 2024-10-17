import express from "express"
import { logoutUser, signinUser, signupUser } from "../controllers/authControllers";

const router=express.Router();

router.post("/signup",signupUser);
router.post("/signin",signinUser);
router.post("/logout",logoutUser)


export default router;