import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 8).then((hash) => {
    User.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const response = await User.findOne({
    where: {
      username: username,
      //password: password,
    },
  });
  bcrypt.compare(password, response.password).then((match) => {
    if (!match) return res.json({ error: "Incorrect Username or Password" });
    else return res.json("You Logged into the system");
  });

  if (!response) return res.json({ error: "User Doesn't Exist" });
};
