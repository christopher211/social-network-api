import { Router } from "express";

const router = Router();

import {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} from "../../controllers/thoughtControllers.js";

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:id/reactions").post(addReaction);

router.route("/:id/reactions/:reactionId").delete(removeReaction);

export default router;
