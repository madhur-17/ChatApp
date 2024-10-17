import express from "express"
import { getMessage, sendMessage } from "../controllers/messageControllers";
import protectRoute from "../middleware/protectRoute";

const router=express.Router();


router.post("/send/:id",protectRoute,sendMessage);
router.get("/:id",protectRoute,getMessage)

export default router;