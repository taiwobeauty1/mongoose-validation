const User = require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    const token = jwt.sign(
        { id: user._id, email: user.email },
        'cd475da680b58afe53f9084ad80c9a2b751acfc0143405a910865aca193716a9',
        {
            expiresIn: "1h",
        }
        );

        return {
            token,
            user,
        };
};

exports.register = async (req, res) => {
    const { email, password } = req.body;

    //checking to see if email already exists
    const emailExists = await User.findOne({email});
    if (emailExists) {
        return res.status(400).json({"error": "Email already in used."});
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ ...req.body, password: hashedPassword });

    // generate token
    const token = generateToken(user);


    res.status(201).json({ returnUser });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: "Invalid credentials"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
    }

    // generate token
    const token = generateToken(user)

    res.status(200).json({ token });
};
