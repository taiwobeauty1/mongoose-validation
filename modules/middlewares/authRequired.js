const jwt = require("jsonwebtoken");

exports.authRequired = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(402).json({ error: "Please login" });
    }

    // const token = authorization.split(" ")[1]
    const token = authorization.split(" ")[1]
    if (!token) {
        return res.status(402).json({ error: "Please login" });
    }

    const user = jwt.verify(
        token,
        'cd475da680b58afe53f9084ad80c9a2b751acfc0143405a910865aca193716a9'
        );

        req.user = user;

    next();
};