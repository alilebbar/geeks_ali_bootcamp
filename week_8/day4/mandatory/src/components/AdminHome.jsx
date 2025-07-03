import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../features/userData/userDataThunk";
import { useEffect } from "react";

export default function AdminHome() {
  const { users, loading,connected } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) {
    dispatch(getAllUsers())
  }
  }, []);

  return (
    <>
      <h1>admin home</h1>
      <p>vous etes un admin</p>
      <ul>
        {loading ? (
          <li>loading...</li>
        ) : connected ? (
          users?.map((user) => <li key={user._id} onClick={() => {
            window.location.href = `/showUser/${user._id}`
          }} style={{cursor:'pointer'}}>{user.username}</li>)
        ):null}
      </ul>
    </>
  );
}
