const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowwercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLenght: [0, "Password too short"]
    },
},
{timestamps: true}
);

module.exports = model("User", userSchema);