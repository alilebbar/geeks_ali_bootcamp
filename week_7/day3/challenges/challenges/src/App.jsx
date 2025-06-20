import './App.css';
import NavBar from './Components/NavBare';
import FormInput from './Components/FormInput';
import AffichageSection from './Components/AffichageSection';
import { useState } from 'react';
function App() {
  const [display, setDisplay] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    country: "USA",
    dietary: {
      nutFree: false,
      lactoseFree: false,
      vegan: false
    }

  })




  return (
    <div className="App" style={{ padding: "0px", margin: "0px" }}>
      <NavBar />
      <FormInput formData={formData} setFormData={setFormData} setDisplay={setDisplay} />
      <br />
      <hr style={{ fontWeight: "bold", margin: "0px", color: "black" }} />
      <br />
      <AffichageSection display={display} formData={formData} />

    </div>
  );
}

export default App;
