import { useState } from "react";
import Garage from "./Garage";
export default function Car({ carinfo }) {
  const [color, setColor] = useState("red");

  return (
    <div className="Cars">
      <h1>Cette voiture est une {color} {carinfo.model}</h1>
      <Garage size="small" />
    </div>
  );
}