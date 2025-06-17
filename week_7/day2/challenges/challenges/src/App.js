import './App.css';
import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handelIncrement = (name) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((language) =>
        language.name === name
          ? { ...language, votes: language.votes + 1 }
          : language
      )
    );
  };

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      {languages.map((language) => (
        <VoteDiv
          name={language.name}
          votes={language.votes}
          key={language.name}
          handelIncrement={handelIncrement}
        />
      ))}
    </div>
  );
}

function VoteDiv({ name, votes, handelIncrement }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        justifyContent: 'space-evenly',
        maxWidth: "400px",
        padding: "auto",
        backgroundColor: "#FFEBCD",
        marginBottom: "20px",
        paddingLeft: "20px",
        paddingRight: "20px", 
        border: "1px solid black",
        borderRadius: "8px",    
       }}
    >
      <div>
        <h2>{votes}</h2>
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "#FFEBCD",
            color: "green",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            fontSize: "32px",
          }}
          onClick={() => handelIncrement(name)}
        >
          Click Here
        </button>
      </div>
    </div>
  );
}

export default App;
