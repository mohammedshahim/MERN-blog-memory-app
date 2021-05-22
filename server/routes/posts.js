import express from "express";
import { createPost, getPosts } from "../controllers/posts";

const router = express.Router();

router.get("/", getPosts);
router.("/", createPost);

export default router;
