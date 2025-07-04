import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../features/userData/userDataThunk";
import { useEffect } from "react";

export default function AdminHome() {
  // Récupère les données des utilisateurs, l'état de chargement et la connexion depuis le store Redux
  const { users, loading, connected } = useSelector((state) => state.userData);

  // Initialise la fonction dispatch pour envoyer des actions Redux
  const dispatch = useDispatch();

  useEffect(() => {
    // Si la liste des utilisateurs est vide, on déclenche la récupération des utilisateurs
    if (!users.length) {
      dispatch(getAllUsers());
    }
  }, []);

  return (
    <>
      <h1>admin home</h1>
      <p>vous êtes un admin</p>
      <ul>
        {/* Affiche "loading..." si les données sont en cours de chargement */}
        {loading ? (
          <li>loading...</li>
        ) : connected ? (
          // Si l'utilisateur est connecté, affiche la liste des utilisateurs
          users?.map((user) => (
            <li
              key={user._id}
              onClick={() => {
                // Redirige vers la page de détails de l'utilisateur au clic
                window.location.href = `/showUser/${user._id}`;
              }}
              style={{ cursor: "pointer" }}
            >
              {user.username}
            </li>
          ))
        ) : null}
      </ul>
    </>
  );
}
