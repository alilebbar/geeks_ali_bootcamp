import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import { useSelector } from "react-redux";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyUser } from "./features/userData/userDataThunk";
import ShowUser from "./pages/showUser.jsx";
import Profile from "./pages/profile.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
  // Récupère les informations de l'utilisateur depuis le store Redux
  const { user, loading, initialized } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    // Vérifie si l'utilisateur est connecté au chargement de l'application
    dispatch(verifyUser());
    console.log(user);
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* Barre de navigation affichée sur toutes les pages */}
        <Navbar />
        <Routes>
          {/* Route pour la page de connexion */}
          <Route path="/login" element={<Login />} />
          {/* Route pour la page d'inscription */}
          <Route path="/register" element={<Register />} />
          {/* Route principale (accueil) */}
          <Route
            path="/"
            element={
              !initialized ? null : // Attend l'initialisation avant d'afficher quoi que ce soit
              loading ? (
                // Affiche un message de chargement pendant la vérification
                <h1>loading...</h1>
              ) : user ? (
                // Si l'utilisateur est connecté, affiche la page d'accueil
                <Home />
              ) : (
                // Sinon, affiche la page de connexion
                <Login />
              )
            }
          />
          {/* Route pour afficher un utilisateur spécifique */}
          <Route path="/showUser/:id" element={<ShowUser />} />
          {/* Route pour la page de profil */}
          <Route
            path="/profile"
            element={
              !initialized ? null : // Attend l'initialisation
              loading ? (
                <h1>loading...</h1>
              ) : user ? (
                // Si l'utilisateur est connecté, affiche son profil
                <Profile user={user} />
              ) : (
                // Sinon, redirige vers la page de connexion
                <Login />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
