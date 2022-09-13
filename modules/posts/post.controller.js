const Post = require("./post.model");

exports.getAllPost = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json({ posts });
};

exports.createPost = async (req, res) => {
    const { title, body, published } = req.body;

    const post = await Post.create({
        title,
        body,
        published,
    });

    res.status(201).json({ post });
};

exports.getSinglePost = async (req, res) => {
    const { postId } = req.params;
    const post = await Post.findById(postId)
    res.status(200).json({post});
};

exports.updatePost = async (req, res) => {
    const { postId } = req.params;
    const post = await Post.findByIdAndUpdate(postId, {...req, body}, {new: true});
    res.status(200).json({post});
};

exports.deletePost = async (req, res) => {
    const {postId  } = req.params;
    const post = await Post.findByIdAndDelete(postId);
    console.log(post);
    res.status(200).json({ msg: "Post deleted successfully" });
};


