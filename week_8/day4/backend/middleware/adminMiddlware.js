import User from "../models/userModel.js";

export const authorizeUserOrAdmin = async (req, res, next) => {
  const targetUserId = req.params.id; // celui que je veux modifier ou supprimer
  const requesterUserId = req.userId; // celui connecté (depuis le token)
  console.log(requesterUserId)

  try {
    const user = await User.findById(requesterUserId);
    if (!user) return res.status(404).json({ message: "Utilisateur introuvable" });

    const isAdmin = user.role === "admin";
    const isSameUser = requesterUserId === targetUserId;

    if (!isAdmin && !isSameUser)
      return res.status(403).json({ message: "Accès refusé" });
    req.isAdmin = isAdmin; // injecte dans la requête si l'utilisateur est admin
    req.isSameUser = isSameUser; // injecte dans la requête si l'utilisateur est le même
    req.user = user; // injecte l'utilisateur connecté si besoin
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
