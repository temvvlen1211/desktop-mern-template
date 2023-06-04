import express, { Express, Request, Response } from "express";
import usersRouter from "./routes/usersRouter";
import cors from "cors";
import moviesRouter from "./routes/moviesRouter";
import authRouter from "./routes/authRouter";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json("Hello world!");
});

app.use("/api/users", usersRouter);
app.use("/api/movies", moviesRouter);
app.use(authRouter);

export default app;
