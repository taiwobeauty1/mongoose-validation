const express = require("express");
const postsRouter = require("./modules/posts/posts.route");
const {dbConnect} = require("./config/dbConnect");
const {authRouter} = require("./modules/users/auth.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my server. use /posts to get all post")
});

app.use("/auth", authRouter);
app.use("/posts", postsRouter);

const start = async () => {
    await dbConnect();
    app.listen(4000, () => {
        console.log("Server listening on http://localhost:4000");
    });
};

start();

