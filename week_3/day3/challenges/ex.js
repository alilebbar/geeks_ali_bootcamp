const planetes = [
  { name: "Neptune", moons: 14 },
  { name: "Uranus", moons: 27 },
  { name: "Saturne", moons: 82 },
  { name: "Jupiter", moons: 79 },
  { name: "Mars", moons: 2 },
  { name: "Terre", moons: 1 },
  { name: "Vénus", moons: 0 },
  { name: "Mercure", moons: 0 },
];

const planetColors = [
  "MidnightBlue",   // Mercure
  "SlateBlue",      // Vénus
  "DarkRed",        // Terre
  "LightBlue",      // Mars
  "DarkBlue",       // Jupiter
  "Blue",           // Saturne
  "OrangeRed",      // Uranus
  "LightYellow"     // Neptune
].reverse();

const section = document.querySelector(".listPlanets");

planetes.forEach((planet, i) => {
  // Créer la planète
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planetColors[i];
  planetDiv.textContent = planet.name;
  planetDiv.style.position = "relative"; // pour positionner les lunes

  // Ajouter les lunes
  for (let j = 0; j < planet.moons; j++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    // Positionner chaque lune autour de la planète
    moon.style.left = `${110 + j * 10}px`;
    moon.style.top = `${Math.random() * 80}px`;
    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
