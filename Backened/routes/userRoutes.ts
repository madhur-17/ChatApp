import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getAllUsers } from "../controllers/userControllers";

const router =express.Router();


router.get("/",protectRoute,getAllUsers)

export default router;