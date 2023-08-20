import express from "express"
import {upload, watch, getEdit,postEdit} from "../controllers/videoController.js";

const videoRouter=express.Router();

videoRouter.get("/upload", upload)
videoRouter.get("/:id(\\d+)", watch)
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)

export default videoRouter;