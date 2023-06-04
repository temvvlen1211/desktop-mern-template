import { Request, Response } from "express";
import MovieModel, { IMovie } from "../models/movieModel";

export const countAllMovies = async (req: Request, res: Response) => {
  res.json(await MovieModel.count({}));
};

export const findAllMovieIds = async (req: Request, res: Response) => {
  const result = await MovieModel.find().select({ _id: 1 });
  res.json(result.map((movieId) => movieId._id));
};

export const findAllMovies = async (req: Request, res: Response) => {
  const { limit = "10", skip = "0", ordering = "releasedAsc" } = req.query;
  let sort = "";
  switch (ordering) {
    case "releasedDesc":
      sort = "-released";
      break;
    case "imdbRatingDesc":
      sort = "-awards.wins";
      break;
    case "titleAsc":
      sort = "title";
      break;
    case "titleDesc":
      sort = "-title";
      break;
    default:
      sort = "released";
      break;
  }
  const result: IMovie[] = await MovieModel.find({})
    .sort(sort)
    .limit(Number(limit))
    .skip(Number(skip));
  res.json(result);
};

export const findMovieById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    if (_id) {
      const result: IMovie | null = await MovieModel.findById(_id);
      res.json(result);
    }
  } catch (err) {
    console.log(err);
  }
};
