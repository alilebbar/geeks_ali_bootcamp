import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const celebrities = [
  {
    title: 'Bob Dylan',
    imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
    buttonLabel: 'Aller sur Wikipedia',
    buttonUrl: 'https://fr.wikipedia.org/wiki/Bob_Dylan',
    description:
      'Bob Dylan (né Robert Allen Zimmerman, 24 mai 1941) est un chanteur/auteur-compositeur et artiste américain influent dans la musique populaire et la culture depuis plus de cinq décennies.',
  },
  {
    title: 'McCartney',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
    buttonLabel: 'Aller sur Wikipedia',
    buttonUrl: 'https://fr.wikipedia.org/wiki/Paul_McCartney',
    description:
      'Sir James Paul McCartney CH MBE (né le 18 juin 1942) est un chanteur, compositeur, musicien et producteur anglais, célèbre mondialement comme co-leader et bassiste des Beatles.',
  },
]
const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];


function App() {
  return (
    <div className="App">
      <h1>Ex1</h1>
      <BootstrapCard/>
      <h1>Ex2</h1>
      <PlanetList/>
    </div>
  );
}
function BootstrapCard() {
  return (
    <>
      {celebrities.map((celebrity) => (
        <div className="card m-5" style={{ width: '30rem' }} key={celebrity.title}>
          <img className="card-img-top" src={celebrity.imageUrl} alt={celebrity.title} />
          <div className="card-body">
            <h5 className="card-title">{celebrity.title}</h5>
            <p className="card-text">{celebrity.description}</p>
            <a href={celebrity.buttonUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              {celebrity.buttonLabel}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
function PlanetList() {
  return (
    <ul class="list-group w-25">
      {planets.map((planet, index) => (
        <li class="list-group-item" key={index}>{planet}</li>
      ))}
    </ul>
  );
}

export default App;
