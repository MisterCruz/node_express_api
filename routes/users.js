import express from "express";

import {
  createUser,
  deleteUser,
  findUser,
  getUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", findUser);

router.delete("/:id", deleteUser);

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }

  res.send("done update");
});

export default router;
