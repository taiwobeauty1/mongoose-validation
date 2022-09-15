const router = require("express").Router;

const { authRequired } = require("../middlewares/authRequired");

const {
    createPost,
    getAllPosts,
    deletePost,
    getSinglePost,
    updatePost
} = require("./post.controller");

const postsRouter = router();

postsRouter.route("/").all(authRequired).get(getAllPosts).post(createPost);
postsRouter
.route("/:postId")
.all(authRequired)
.get(getSinglePost)
.patch(updatePost)
.delete(deletePost);

module.exports = { postsRouter };