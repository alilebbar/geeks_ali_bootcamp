
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function App() {
  let pays = [{name:"Macao",src:"/images/Macao.webp",alt:"Macao",caption:"Macao"},
    {name:"Hong Kong",src:"/images/HongKong.jpg",alt:"Hong Kong",caption:"Hong Kong"},
    {name:"Las Vegas",src:"/images/LasVegas.webp",alt:"Las Vegas",caption:"Las Vegas"},
    {name :"Japan",src:"/images/Japan.webp",alt:"Japan",caption:"Japan"}
  ]
  return (
    <div className="App" style={{maxWidth:"50%",margin:"auto",padding:"auto"}}>
      <Carousel>
        {pays.map((image, index) => (
          <div key={index} >
            <img src={image.src} alt={image.alt} />
            <p className="legend">{image.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
