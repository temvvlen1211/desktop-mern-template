import { Router } from "express";
import {
  countAllMovies,
  findAllMovieIds,
  findAllMovies,
  findMovieById,
} from "../controllers/moviesController";

const moviesRouter = Router();

moviesRouter.get("/", findAllMovies);
moviesRouter.get("/count", countAllMovies);
moviesRouter.get("/ids", findAllMovieIds);
moviesRouter.get("/:_id", findMovieById);

export default moviesRouter;
