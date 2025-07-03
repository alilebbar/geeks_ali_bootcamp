import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Récupérer tous les utilisateurs (sans le mot de passe)
// Accessible uniquement par un admin
export const getUsers = async (req, res) => {
  try {
    console.log(req.isAdmin);
    if (!req.isAdmin) return res.status(403).json({ message: "Accès refusé" });
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un utilisateur par son ID (sans mot de passe)
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) res.status(404).json({ message: "user not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Créer un nouvel utilisateur avec hash du mot de passe
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Exclure le mot de passe avant de retourner l'objet utilisateur
    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.status(201).json({
      user: userWithoutPassword,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un utilisateur (admin peut modifier n'importe qui, utilisateur peut modifier son propre compte sauf admin)
export const updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let user;

    if (req.isAdmin && req.isSameUser) {
      // Admin modifie son propre compte
      user = await User.findByIdAndUpdate(
        req.params.id,
        { username, email, password: hashedPassword },
        { new: true }
      );
    } else {
      // Sinon, on modifie seulement si ce n'est pas un admin
      user = await User.findOneAndUpdate(
        { _id: req.params.id, role: { $ne: "admin" } },
        { username, email, password: hashedPassword },
        { new: true }
      );
    }

    if (!user) return res.status(404).json({ message: "user not found" });

    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.status(201).json({
      user: userWithoutPassword,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un utilisateur
// - Admin peut supprimer n'importe quel utilisateur, y compris lui-même
// - Utilisateur peut supprimer son propre compte seulement s'il n'est pas admin
// - Un admin ne peut pas supprimer un autre admin
export const deleteUser = async (req, res) => {
  try {
    let user = "";
    if (req.isAdmin && req.isSameUser) {
      // Admin supprime son propre compte
      user = await User.findByIdAndDelete(req.params.id);
    } else {
      // Sinon suppression uniquement si ce n'est pas un admin
      user = await User.findOneAndDelete({
        _id: req.params.id,
        role: { $ne: "admin" },
      });
    }

    if (!user) return res.status(404).json({ message: "user not found", user });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Connexion utilisateur
// Vérifie email + mot de passe et génère un token JWT en cookie sécurisé
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user not found" });

    const validePassword = await bcrypt.compare(password, user.password);
    if (!validePassword)
      return res.status(405).json({ message: "incorrect password!" });

    jwt.sign(
      { id: user._id },
      process.env.SECRET_JWT,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) return res.status(500).json({ message: err.message });

        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 3600000,
        });

        res.status(200).json({ message: "Login successful", user });
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Vérification du token et récupération des infos utilisateur
export const verify = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(400).json({ message: "token not found" });

    const { id } = jwt.verify(token, process.env.SECRET_JWT);
    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ message: "user not found" });
    res.status(200).json({ user, message: "user verified successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Promouvoir un utilisateur au rôle admin (accessible uniquement aux admins)
export const userToAdmin = async (req, res) => {
  if (!req.isAdmin)
    return res.status(403).json({ message: "you are not authorized" });
  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      { role: "admin" }
    );
    if (!user) return res.status(404).json({ message: "user not found" });

    res.status(200).json({ message: "user upgraded to admin successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Déconnexion utilisateur
// Supprime le token JWT en cookie
export const logout = async (req, res) => {
  try {
    res.clearCookie("token").status(200).json({ message: "user logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};