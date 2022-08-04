import express from "express";
import * as voteController from "../controllers/posts/vote.js";
import * as recordController from "../controllers/posts/record.js";
import * as postController from "../controllers/posts/posts.js";

const router = express.Router();

router.post("/vote/:postId", voteController.voteToPost);

router.delete("/vote/:postId", voteController.voteDeleteToPost);

router.get("/record/:postId", recordController.getVoteStatistics);

router.get("/", postController.getPostsList);

router.get("/popular", postController.getThreePopularPostsList);

export default router;