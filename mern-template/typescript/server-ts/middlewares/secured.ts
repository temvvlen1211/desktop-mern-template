import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { IRequest } from "../interfaces";

const secured = (req: IRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Токен байхгүй байна!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    req.user = decoded;
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Хэрэглэгч олдсонгүй" });
  }

  return next();
};

export default secured;
