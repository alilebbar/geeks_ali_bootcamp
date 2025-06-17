import { useState } from 'react';

export default function Phone() {
    const [phoneInfo,setPhoneInfo] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "Black",
        year: 2020
    });
    const changeColor =()=>{
        setPhoneInfo({
            ...phoneInfo,
            color:"blue"
        });
   }
    return (
        <div className="Phone">
            <h1>Phone Information</h1>
            <p>Brand: {phoneInfo.brand}</p>
            <p>Model: {phoneInfo.model}</p>
            <p>Color: {phoneInfo.color}</p>
            <p>Year: {phoneInfo.year}</p>
            <button onClick={changeColor}>Change Color to Blue</button>
        </div>
        
    );
}