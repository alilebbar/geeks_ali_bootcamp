import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../features/userData/userDataThunk";
const ShowUser = () => {
  const { showUser, loading } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);
  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : showUser ? (
        <div>
          <h1>username : {showUser.username}</h1>
          <h1>email : {showUser.email}</h1>
          <h1>role : {showUser.role}</h1>
          <button onClick={() => (window.location.href = "/")}>go back</button>
        </div>
      ) : null}
    </>
  );
};

export default ShowUser;
