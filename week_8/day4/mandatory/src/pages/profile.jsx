import { useDispatch } from "react-redux";
import { deleteUser ,updateUser } from "../features/userData/userDataThunk";
import { useState } from "react";
const Profile = ({ user }) => {
  console.log(user);
  const dispatch = useDispatch();
  const [userToUpdate, setUserToUpdate] = useState(user);
  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <>
      <h1>profile</h1>
      {showUpdate ? (
        <div>
          <form>
            <input
              type="text"
              placeholder="username"
              onChange={(e) =>
                setUserToUpdate({ ...userToUpdate, username: e.target.value })
              }
              value={userToUpdate?.username}
            />
            <input
              type="text"
              placeholder="email"
              onChange={(e) =>
                setUserToUpdate({ ...userToUpdate, email: e.target.value })
              }
              value={userToUpdate?.email}
            />
            <input
              type="text"
              placeholder="password"
              onChange={(e) =>
                setUserToUpdate({ ...userToUpdate, password: e.target.value })
              }
              value={userToUpdate?.password}
            />
          </form>
        </div>
      ) : (
        <div>
          <p>username : {user.username}</p>
          <p>email : {user.email}</p>
          <p>role : {user.role}</p>
        </div>
      )}

      {user ? (
        <div>
          {" "}
          {showUpdate ? (
            <button onClick={() => dispatch(updateUser(userToUpdate))}>
              valider
            </button>
          ) : (
            <button onClick={() => setShowUpdate(!showUpdate)}>update</button>
          )}
          <button
            onClick={() => {
              dispatch(deleteUser(user._id));
              window.location.href = "/";
            }}
          >
            delete
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
