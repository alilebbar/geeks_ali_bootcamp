import "./App.css";
import quotes from "./quotes";
import React, { useState } from "react";

function App() {
  const [varRainbow, setVarRainbow] = useState(randomColor());
  const [usedIndexes, setUsedIndexes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  function randomColor() {
    return `rgb(${rand()}, ${rand()}, ${rand()})`;
  }

  function rand() {
    return Math.floor(Math.random() * 256);
  }

  const getRandomQuoteIndex = () => {
    if (usedIndexes.length === quotes.length) return null; // toutes les citations ont été affichées

    let index;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (usedIndexes.includes(index));
    return index;
  };

  const handelClick = () => {
    const index = getRandomQuoteIndex();
    if (index === null) return; // toutes les citations ont été utilisées

    setUsedIndexes(prev => [...prev, index]);
    setCurrentIndex(index);
    setVarRainbow(randomColor());
  };

  // Initialiser la première citation au démarrage
  React.useEffect(() => {
    handelClick();
  }, []);

  document.body.style.backgroundColor = varRainbow;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          
          borderRadius: "10px",
          backgroundColor: "white",
          paddingInline: "15px",
          paddingBlock: "20px",
        }}
      >
        {currentIndex !== null && (
          <>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "30px",
                textAlign: "start",
                color: varRainbow,
              }}
            >
              "{quotes[currentIndex].quote}"
            </span>
            <div
              style={{
                fontStyle: "italic",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                marginTop: "20px",
                paddingRight: "10px",
              }}
            >
              <span> -{quotes[currentIndex].author===""? "Abdelali lebbar":quotes[currentIndex].author }-</span>
            </div>
          </>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            marginTop: "30px",
            paddingRight: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: varRainbow,
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              width: "110px",
              border: "none",
            }}
            onClick={handelClick}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
