const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateTokens(user) {
    const accessToken = jwt.sign(
        { user_name: user.user_name },
        process.env.SECRET_KEY,
        { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
        { user_name: user.user_name },
        process.env.REFRESH_SECRET,
        { expiresIn: "7d" }
    );
    return { accessToken, refreshToken };
}

module.exports = { generateTokens };