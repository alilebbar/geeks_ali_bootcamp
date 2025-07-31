const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateTokens } = require("../fonctions/tokenGenerateur");
require("dotenv").config();

async function register(req, res, next) {
  const { name, user_name, password } = req.body;
  if (!name || !user_name || !password) {
    const error = new Error("un problème d'une de vos informations");
    error.status = 400;
    return next(error);
  }
  try {
    const userName = await User.findOne({ user_name });
    if (userName) {
      const error = new Error("le username existe déjà");
      error.status = 409;
      return next(error);
    }
    const user = new User({ name, user_name, password });
    await user.save();
    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(201).json({
      message: "User registered successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const { user_name, password } = req.body;
  try {
    const user = await User.findOne({ user_name });
    if (!user) {
      const error = new Error("l'utilisateur n'existe pas");
      error.status = 404;
      return next(error);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error(
        "le nom d'utilisateur ou le mot de passe est incorrect"
      );
      error.status = 401;
      return next(error);
    }

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
  } catch (error) {
    next(error);
  }
}

async function refresh(req, res, next) {
  const token = req.cookies.refreshToken;
  if (!token) {
    const error = new Error("pas de token de rafraichissement");
    error.status = 401;
    return next(error);
  }

  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) {
      const error = new Error("le token de rafraichissement est invalide");
      error.status = 403;
      return next(error);
    }
    const accessToken = jwt.sign(
      { user_name: user.user_name },
      process.env.SECRET_KEY,
      { expiresIn: "15m" }
    );
    res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      })
      .json({ message: "Nouveau accessToken généré" });
  });
}

async function logout(req, res) {
  res.clearCookie("refreshToken");
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logged out" });
}

module.exports = { register, login, logout, refresh };
