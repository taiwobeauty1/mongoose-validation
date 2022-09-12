const router = require("express").Router;
const { createPost, getAllPost } = require("./post.controller");

const postsRouter = router();

postsRouter.route("/").get(getAllPost).post(createPost);

module.exports = postsRouter;