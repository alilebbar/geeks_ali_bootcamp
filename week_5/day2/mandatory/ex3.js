async function getStarship() {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
}

getStarship();
