import React, { useState } from "react";

export default function Forms() {
    let [username, setUsername] = useState("");
    let [age,setage] = useState(null);
    let [errormessage ,setErrormessage] = useState("");
    const [selectedCar, setSelectedCar] = useState("Volvo");
    let header = username ? `Hello ${username}` : "Please enter your name";
    const handleChangeName = (event) => {
        setUsername(event.target.value);
    }
    const handleChangeAge = (event) => {
        let ageValue = event.target.value;
        if (isNaN(ageValue)) {
            ageValue = "";
            setage("");
            setErrormessage(`Please enter a valid number for age`);

        } else {
            setage(ageValue);
            setErrormessage("");
        }
       
    }
     const handleChangeCars = (event) => {
    setSelectedCar(event.target.value);
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello ${username}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChangeName} value={username} />
            </label>
            <label>
                Age:
                <input type="text" name="age" onChange={handleChangeAge} value={age} />     
            </label>
            <label>
                text : 
                <textarea name="text" rows="4" cols="50" placeholder="Enter your text here..." value=""></textarea>
            </label>
            <label>Choisissez une voiture :</label>
        <select value={selectedCar} onChange={handleChangeCars}>
          <option value="Volvo">Volvo</option>
          <option value="BMW">BMW</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
        </select>
            <button type="submit">Submit</button>
            <h1>name is  : {username}</h1>
            <h1>age is : {age}</h1>
            <h1 style = {{color : "red"}}>{errormessage}</h1>
            <h1> {header}</h1>
        </form>
    );
}
