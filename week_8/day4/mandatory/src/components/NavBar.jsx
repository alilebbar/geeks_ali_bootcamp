import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn.jsx";

const Navbar = () => {
  const { user } = useSelector((state) => state.userData);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#f2f2f2",
        borderBottom: "1px solid #ccc",
      }}
    >
      {/* Liens à gauche */}
      <div>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        {user && (
          <Link to="/profile" style={{ marginRight: "1rem" }}>Profile</Link>
        )}
      </div>

      {/* Droite : soit Logout, soit Login/Register */}
      <div>
        {user ? (
          <LogoutBtn />
        ) : (
          <>
            <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
