import express from "express";

import {protect} from "../middleware/auth.middleware.js"

import { createGig, deleteGig, getFreelancerGigs, getGigById, getGigStats, updateGig, updateGigStatus } from "../controllers/gig.controller.js";

const router = express.Router();

router.get("/", getFreelancerGigs);

router.get("/:id", getGigById);

router.post("/", protect, createGig);

router.put("/:id", protect, updateGig);

router.delete("/:id", protect, deleteGig);

router.patch("/:id/status", protect, updateGigStatus);

router.get("/stats",protect, getGigStats);

export default router;