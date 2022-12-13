import { handleError } from "../utils/errorHandler.js";
import DB from "../models/index.js";

const Game = DB.game;
export const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.sanatizedData);
    res.status(201).send({
      seccuss: true,
      message: 'Game created!',
    });
  } catch(err) {
    handleError(err, res);
  }
};
