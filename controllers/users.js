import { v4 as uuidv4 } from "uuid";
let users = [];
export const createUser = (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  const userwithId = { ...user, id: userId };

  users.push(userwithId);
  res.send("done");
};

export const getUser = (req, res) => {
  res.send(users);
};

export const findUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send("done");
};
