import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IRequest } from "../interfaces";

export const getAuthInfo = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    if (decoded) req.user = decoded;
  } catch (error) {
    console.log("error:", error);
  }

  return next();
};
