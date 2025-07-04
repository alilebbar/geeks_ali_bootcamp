import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, deleteUser, updateUser,upgradeToAdmin } from "../features/userData/userDataThunk";

const ShowUser = () => {
  const { showUser, loading, user } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const id = useParams().id;

  const [showUpdate, setShowUpdate] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState({
    username: "",
    email: "",
    password: "",
    _id: id,
  });

  // Charger les données de l'utilisateur
  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);

  // Mettre à jour le state local une fois que showUser est dispo
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

  // Supprimer l'utilisateur (avec confirmation)
  const clickDelete = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  // Activer/désactiver le formulaire de mise à jour
  const clickUpdate = (event) => {
    event.preventDefault();
    setShowUpdate(!showUpdate);
  };

  // Valider les changements
  const validate = async (event) => {
    event.preventDefault();
    await dispatch(updateUser(userToUpdate));
    await dispatch(getUser(id));
    setShowUpdate(false);
  };
  const clickUpgradeToAdmin = async(event) => {
    event.preventDefault();
    await dispatch(upgradeToAdmin(id))
    await dispatch(getUser(id));
  }

  const isOwnerOrAdmin = user?._id === showUser?._id || user?.role === "admin";
  const isNotAdmin = showUser?.role !== "admin";

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : showUser ? (
        <div className="user-container">
          {showUpdate ? (
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
            <>
              <h1>Username: {showUser.username}</h1>
              <h1>Email: {showUser.email}</h1>
              <h1>Role: {showUser.role}</h1>
            </>
          )}

          {isOwnerOrAdmin && isNotAdmin && (
            <div className="action-buttons">
              <button onClick={clickDelete}>Delete</button>
              <button onClick={clickUpdate}>Update</button>
              <button onClick={clickUpgradeToAdmin}>Upgrade to Admin</button> {/* à implémenter plus tard */}
            </div>
          )}

          <button onClick={() => (window.location.href = "/")}>Go Back</button>
        </div>
      ) : null}
    </>
  );
};

export default ShowUser;
