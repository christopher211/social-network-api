import express from "express";

const router = express.Router();

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from "../../controllers/userControllers.js";

// /api/user
router.route("/").get(getAllUsers).post(createUser);

// /api/user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/user/:id/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

export default router;
