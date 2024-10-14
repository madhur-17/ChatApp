import express ,{Request,Response}from "express"
import { signupUser } from "../controllers/authControllers";

const router=express.Router();

router.post("/signup",signupUser)


export default router;