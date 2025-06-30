import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticate = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Token manquant" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    req.userId = decoded.id; // injecte l'id de l'utilisateur dans la requête
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
};
