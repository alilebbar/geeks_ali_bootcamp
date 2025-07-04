import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/userData/userDataThunk";

// Composant de connexion
export default function Login() {
  // État local pour stocker l'email et le mot de passe
  const [user, setUser] = useState({ email: "", password: "" });

  // Hook pour dispatcher les actions Redux
  let dispatch = useDispatch();

  // Récupération des données utilisateur depuis le store Redux
  const userData = useSelector((state) => state.userData);

  // Fonction appelée lors de la soumission du formulaire
  const clickLogin = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    dispatch(loginUser(user)); // Dispatch l'action de connexion
    setUser({ email: "", password: "" }); // Réinitialise les champs du formulaire
  };

  return (
    <>
      <div>
        {/* Formulaire de connexion */}
        <form onSubmit={clickLogin}>
          {/* Champ pour l'email */}
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user?.email}
          />
          {/* Champ pour le mot de passe */}
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user?.password}
          />
          {/* Bouton de connexion */}
          <button>login</button>
        </form>

        {/* Affichage conditionnel selon l'état de chargement et de connexion */}
        {userData.loading && userData.connected ? (
          <p>Chargement...</p>
        ) : (
          <>
            {/* Affiche le nom d'utilisateur si connecté */}
            {userData.user?.username && <p>user : {userData.user.username}</p>}
            {/* Affiche une erreur si elle existe */}
            {userData.error && <p>error : {userData.error}</p>}
            {/* Affiche un message si présent */}
            {userData.message && <p>message : {userData.message}</p>}
          </>
        )}
      </div>
    </>
  );
}
