import React, { useState } from 'react';


export default function ClickMe(){
    let [isToggleOn, setIsToggleOn] = useState(true);
    alert("You clicked me!");
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`You pressed the Enter key! You typed: ${event.target.value}`);
        }
    }
    return(
        <div className="Events">
            <h1>Click the button to see an alert</h1>
            <button onClick={ClickMe}>Click Me!</button>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Type something..." />
            <p>{isToggleOn ? "The button is ON" : "The button is OFF"}</p>
            <button onClick={() => setIsToggleOn(!isToggleOn)}>
                {isToggleOn ? "Turn OFF" : "Turn ON"} </button>
        </div>
    )
}