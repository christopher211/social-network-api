import express from "express";
import userRoutes from "./userRoutes.js";
import thoughtRoutes from "./thoughtRoutes.js";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);

export default router;
