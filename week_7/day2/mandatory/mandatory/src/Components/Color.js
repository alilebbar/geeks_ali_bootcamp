import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]); // S’exécute à chaque changement de favoriteColor

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>{favoriteColor}</h1>
      <button onClick={changeColor}>Changer la couleur</button>
    </div>
  );
}

export default Color;
