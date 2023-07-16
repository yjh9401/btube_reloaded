import express from "express";
import {join, login} from "../controllers/userController.js";
import {trendings, search} from "../controllers/videoController.js";

const globalRouter=express.Router();

globalRouter.get("/", trendings);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;