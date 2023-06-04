import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel, { IUser } from "../models/userModel";
import bcrypt from "bcrypt";
import { IRequest } from "../interfaces";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    return {
      success: false,
      status: 400,
      message: "И-Мэйл хоосон байж болохгүй",
    };
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Хэрэглэгч олдсонгүй" });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Нууц үг таарахгүй байна" });
  }
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.JWT_SECRET || "",
    {
      expiresIn: "2h",
    }
  );
  res
    .status(200)
    .json({ success: true, token, message: "Амжилттай нэвтэрлээ" });
};

export const register = async (req: Request, res: Response) => {
  const { email, password, repassword } = req.body;

  if (password !== repassword) {
    return res
      .status(400)
      .json({ success: false, message: "Давтсан нууц үг таарахгүй байна" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser: IUser | null = await UserModel.findOne({ email });

  if (existingUser)
    return res
      .status(400)
      .json({ success: false, message: "И-Мэйл бүртгэлтэй байна!" });

  try {
    await UserModel.create({ email, hashedPassword });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Бүртгүүлэхэд алдаа гарлаа",
      error: error,
    });
  }
  return res
    .status(200)
    .json({ success: true, message: "Амжилттай бүртгүүллээ" });
};

export const currentUser = async (req: IRequest, res: Response) => {
  res.json(req.user);
};
