import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [calculatrice, setcalculatrice] = useState({
    number1: "",
    number2: "",
    result: 0,
    operation: ["add", "subtract", "multiply", "divide"]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number1") {
      setcalculatrice({ ...calculatrice, number1: Number(value) });
    } else if (name === "number2") {
      setcalculatrice({ ...calculatrice, number2: Number(value) });
    }
  };
  const run = () => {
    const { number1, number2 } = calculatrice;
    const operation = document.querySelector("select").value;
    switch (operation) {
      case "add":
        setcalculatrice({ ...calculatrice, result: number1 + number2 });
        break;
      case "subtract":
        setcalculatrice({ ...calculatrice, result: number1 - number2 });
        break;
      case "multiply":
        setcalculatrice({ ...calculatrice, result: number1 * number2 });
        break;
      case "divide":
        if (number2 !== 0) {
          setcalculatrice({ ...calculatrice, result: number1 / number2 });
        } else {
          alert("Cannot divide by zero");
        }
        break;
      default:
        alert("Please select a valid operation");
    }
    
  };
  useEffect(()=>{
    setcalculatrice({ ...calculatrice, number1: "",number2:"" })
    
  },[calculatrice.result])
  return (
    <div  style={{ textAlign: "center" }}>
      <div
        style={{
          width: "400px",
          margin: "auto",
          height: "30vh",
          marginTop: "100px",
          color: "white",
          padding: "20px",
          display : "flex",
          justifyContent:"center",
          alignItems: "center",
          flexDirection:"column",
          gap:"5px"
          
        }}

      >
        <h2>Adding tow numbers</h2>
        <div>
        <input
          style={{
            backgroundColor:"#D3AFFC",
            width : "120px",
            height: "70px",
            borderRadius : "10%",
            fontSize:"50px"
            
          }}
          type="number"
          
          name="number1"
          value={calculatrice.number1}
          onChange={handleChange}
        />
        <input
        style={{
            backgroundColor:"#D3AFFC",
            width : "120px",
            height: "70px",
            borderRadius : "10%",
            marginLeft :"10px",
            fontSize:"50px"
          }}
          type="number"
         
          name="number2"
          value={calculatrice.number2}
          onChange={handleChange}
        />
        </div>
        <select name="operations">
          {calculatrice.operation.map((op, index) => (
            <option key={index} value={op}>
              {op}
            </option>
          ))}
        </select>
        <button onClick={run}>run</button>
        <h2>Result: {calculatrice.result}</h2>
      </div>
    </div>
  );
}

export default App;
