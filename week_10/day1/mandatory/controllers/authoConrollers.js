const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateTokens } = require("../fonctions/tokenGenerateur");
require("dotenv").config();

async function register(req, res) {
  const { name, user_name, password } = req.body;
  if (!name || !user_name || !password) {
    return res.status(400).json({ message: "Please provide all the fields" });
  }
  try {
    const userName = await User.findOne({ user_name });
    if (userName) {
      return res.status(409).json({ message: "Username already exists" });
    }
    const user = new User({ name, user_name, password });
    await user.save();
    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(201).json({
      message: "User registered successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error registering user" });
  }
}

async function login(req, res) {
  const { user_name, password } = req.body;
  try {
    const user = await User.findOne({ user_name });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const { accessToken, refreshToken } = generateTokens(user);
        res
          .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
          })
          .cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
          })
          .json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in user" });
  }
}

async function refresh(req, res) {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: "No refresh token" });

  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid refresh token" });
    const accessToken = jwt.sign(
      { user_name: user.user_name },
      process.env.SECRET_KEY,
      { expiresIn: "15m" }
    );
    res.status(200).cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
  });
}

async function logout(req, res) {
  res.clearCookie("refreshToken");
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logged out" });
}

module.exports = { register, login, logout, refresh };
