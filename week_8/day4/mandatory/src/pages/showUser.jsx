import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, deleteUser, updateUser, upgradeToAdmin } from "../features/userData/userDataThunk";

const ShowUser = () => {
  // Récupère les données du store Redux
  const { showUser, loading, user } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  // Récupère l'id de l'utilisateur depuis l'URL
  const id = useParams().id;

  // State local pour afficher ou non le formulaire de mise à jour
  const [showUpdate, setShowUpdate] = useState(false);
  // State local pour stocker les infos à mettre à jour
  const [userToUpdate, setUserToUpdate] = useState({
    username: "",
    email: "",
    password: "",
    _id: id,
  });

  // Charge les données de l'utilisateur à l'affichage du composant ou lors d'un changement d'id
  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);

  // Met à jour le state local quand les données de l'utilisateur sont chargées
  useEffect(() => {
    if (showUser) {
      setUserToUpdate({
        username: showUser.username || "",
        email: showUser.email || "",
        password: "",
        _id: id,
      });
    }
  }, [showUser, id]);

  // Fonction pour supprimer l'utilisateur (avec confirmation)
  const clickDelete = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  // Affiche ou masque le formulaire de mise à jour
  const clickUpdate = (event) => {
    event.preventDefault();
    setShowUpdate(!showUpdate);
  };

  // Valide la mise à jour de l'utilisateur
  const validate = async (event) => {
    event.preventDefault();
    await dispatch(updateUser(userToUpdate));
    await dispatch(getUser(id)); // Recharge les données après mise à jour
    setShowUpdate(false);
  };

  // Fonction pour promouvoir l'utilisateur en admin
  const clickUpgradeToAdmin = async (event) => {
    event.preventDefault();
    await dispatch(upgradeToAdmin(id));
    await dispatch(getUser(id)); // Recharge les données après la promotion
  };

  // Vérifie si l'utilisateur connecté est le propriétaire du profil ou un admin
  const isOwnerOrAdmin = user?._id === showUser?._id || user?.role === "admin";
  // Vérifie si l'utilisateur affiché n'est pas déjà admin
  const isNotAdmin = showUser?.role !== "admin";

  return (
    <>
      {loading ? (
        // Affiche un message de chargement
        <h1>Loading...</h1>
      ) : showUser ? (
        <div className="user-container">
          {showUpdate ? (
            // Formulaire de mise à jour de l'utilisateur
            <form onSubmit={validate} className="update-form">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setUserToUpdate({ ...userToUpdate, username: e.target.value })
                }
                value={userToUpdate.username}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) =>
                  setUserToUpdate({ ...userToUpdate, email: e.target.value })
                }
                value={userToUpdate.email}
              />
              <input
                type="password"
                placeholder="New Password"
                onChange={(e) =>
                  setUserToUpdate({ ...userToUpdate, password: e.target.value })
                }
                value={userToUpdate.password}
              />
              <button type="submit">Validate</button>
            </form>
          ) : (
            // Affiche les informations de l'utilisateur
            <>
              <h1>Username: {showUser.username}</h1>
              <h1>Email: {showUser.email}</h1>
              <h1>Role: {showUser.role}</h1>
            </>
          )}

          {/* Affiche les boutons d'action si l'utilisateur connecté est le propriétaire ou un admin, et que l'utilisateur affiché n'est pas admin */}
          {isOwnerOrAdmin && isNotAdmin && (
            <div className="action-buttons">
              <button onClick={clickDelete}>Delete</button>
              <button onClick={clickUpdate}>Update</button>
              <button onClick={clickUpgradeToAdmin}>Upgrade to Admin</button>
            </div>
          )}

          {/* Bouton pour revenir à la page d'accueil */}
          <button onClick={() => (window.location.href = "/")}>Go Back</button>
        </div>
      ) : null}
    </>
  );
};

export default ShowUser;
