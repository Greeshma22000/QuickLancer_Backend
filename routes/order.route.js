import express from "express";
import {protect} from "../middleware/auth.middleware.js";
import { addOrderMessage, cancelOrder, createOrder, getClientOrders, getFreelancerOrders, getOrderById, getOrderStats, updateOrderStatus } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/freelancer", protect, getFreelancerOrders);

router.get("/client", protect, getClientOrders);

router.get("/stats", protect, getOrderStats);

router.get("/:id", protect, getOrderById);

router.post("/", protect, createOrder);

router.patch("/:id/status", protect, updateOrderStatus);

router.post("/:id/message", protect, addOrderMessage);

router.patch("/:id/cancel", protect, cancelOrder);

export default router;