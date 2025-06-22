import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [postData, setPostData] = useState("");
  const [messageRecoi, setMessageRecoi] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5500/api/hello");
      const message = await response.text();
      return message;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const msg = await getData();
      setData(msg);
    };
    fetchData();
  }, []);

  const sendData = async () => {
    try {
      const response = await fetch("http://localhost:5500/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ valeur: postData }),
      });
      const message = await response.text();
      setMessageRecoi(message);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handelChange = (e) => {
    const { value } = e.target;
    setPostData(value);
  };

  return (
    <div className="App">
      <h1>{data}</h1>
      <label htmlFor="message">Entrer un message</label>
      <input type="text" name="message" onChange={handelChange} />
      <button onClick={sendData}>send</button>
      <h1>{messageRecoi}</h1>
    </div>
  );
}

export default App;
