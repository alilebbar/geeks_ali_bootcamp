import { useSelector } from "react-redux";
import "../App.css";
const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.userAge);
  if (loading)
    return (
      <div
        class="loader"
        style={{
          position: "relative",
          top: "50%",
          left: "25%",
          margin: "20px",
          marginRight:"100px",
        }}
      ></div>
    );
  return (
    <>
      <h1>Age: {age}</h1>
    </>
  );
};

export default AgeDisplay;
