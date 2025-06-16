import React from 'react';
import './Exercise.css'; 
export default function Exercise() {
    const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

    return (
        <div style={style_header}>
            <h1 style={{ color: "red", backgroundColor: "lightblue" }}>
                Exercise 3
            </h1>
            <p className='para'>Ceci est un paragraphe.</p>

            <a href="https://www.example.com" target="_blank" rel="noreferrer">
                Clique ici pour visiter un site
            </a>

            <form>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <button type="submit">Envoyer</button>
            </form>

            <img src="https://via.placeholder.com/150" alt="Exemple d'image" />

            <ul>
                <li>Élément 1</li>
                <li>Élément 2</li>
                <li>Élément 3</li>
            </ul>
        </div>
    );
}