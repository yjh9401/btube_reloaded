import express from "express"
import {upload, see, edit, remove} from "../controllers/videoController.js";

const videoRouter=express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)/see", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);

export default videoRouter;