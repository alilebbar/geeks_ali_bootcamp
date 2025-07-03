import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/userData/userDataThunk";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  let dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const clickLogin = (event) => {
    event.preventDefault();
    dispatch(loginUser(user));
    setUser({ email: "", password: "" });
  };
  return (
    <>
      <div>
        <form onSubmit={clickLogin}>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user?.email}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user?.password}
          />
          <button>login</button>
        </form>
        {userData.loading && userData.connected ? (
          <p>Chargement...</p>
        ) : (
          <>
            {userData.user?.username && <p>user : {userData.user.username}</p>}
            {userData.error && <p>error : {userData.error}</p>}
            {userData.message && <p>message : {userData.message}</p>}
          </>
        )}
      </div>
    </>
  );
}
