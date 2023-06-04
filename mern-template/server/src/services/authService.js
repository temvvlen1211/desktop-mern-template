import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser } from "../services/usersService";
import { userModel } from "../models/userModel";
import { env } from "../configs/env";

export const registerUser = async ({ email, password }) => {
  const hashed_password = await bcrypt.hash(password, 10);
  const user = await createUser({
    email,
    password: hashed_password,
    name: email.split("@")[0],
  });
  return user;
};

export const loginUser = async ({ email, password }) => {
  if (!email) {
    return { success: false, status: 400, message: "Email required" };
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    console.log("user oldoogui");
    return { success: false, status: 404, message: "User not found" };
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    console.log("password mismatch");
    return { success: false, status: 400, message: "Password not matching" };
  }
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return {
    success: true,
    status: 200,
    message: "Login success",
    body: { user, token },
  };
};
