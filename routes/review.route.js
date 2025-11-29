import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { addFreelancerReply, createReview, getFreelancerReviews, getReviewById, getReviewStats, updateFreelancerReply } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/freelancer", protect, getFreelancerReviews);

router.get("/stats", protect, getReviewStats);

router.get("/:id", protect, getReviewById);

router.post("/", protect, createReview);

router.post("/:id/reply", protect, addFreelancerReply);

router.put("/:id/reply", protect, updateFreelancerReply);

export default router;