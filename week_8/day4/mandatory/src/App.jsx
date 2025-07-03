import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import LogoutBtn from "./components/LogoutBtn.jsx";
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
  const { user, loading, initialized } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyUser());
    console.log(user);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              !initialized ? null : loading ? ( // 🔄 tant qu’on ne sait pas si l’utilisateur est connecté ou non
                <h1>loading...</h1>
              ) : user ? (
                <Home />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/showUser/:id" element={<ShowUser />} />
          <Route
            path="/profile"
            element={
              !initialized ? null : loading ? (
                <h1>loading...</h1>
              ) : user ? (
                <Profile user={user} />
              ) : (
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
