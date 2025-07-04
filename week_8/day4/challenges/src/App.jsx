import "./App.css";
import AgeDisplay from "./components/AgeDisplay .jsx";
import AgeControls from "./components/AgeControls.jsx";

function App() {
  return (
    <>
      <div className="App">
        <h1>User Age</h1>
        <AgeDisplay />
        <AgeControls />
      </div>
    </>
  );
}

export default App;
