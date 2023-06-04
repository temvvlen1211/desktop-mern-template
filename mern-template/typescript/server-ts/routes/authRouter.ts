import { Router } from "express";
import { currentUser, login, register } from "../controllers/authController";
import secured from "../middlewares/secured";

const authRouter = Router();

authRouter.post("/api/login", login);
authRouter.post("/api/register", register);
authRouter.get("/api/currentUser", secured, currentUser);

export default authRouter;
