import './App.css';
import Car from './Components/Car';
import Color from './Components/Color';
import Events from './Components/Events';
import Phone from './Components/Phone';
function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  
  return (
    <div className="App">
     <Car carinfo={carinfo} />
      <Events />
      <Phone/>
      <Color/>
    </div>
  );
}

export default App;
