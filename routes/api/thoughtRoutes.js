import express from "express";

const router = express.Router();

import {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} from "../../controllers/thoughtControllers.js";

// /api/thought
router.route("/").get(getThoughts).post(createThought);

// /api/thought/:id
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought/:id/reactions
router.route("/:id/reactions").post(addReaction);

// /api/thought/:id/reactions/:reactionId
router.route("/:id/reactions/:reactionId").delete(removeReaction);

export default router;
