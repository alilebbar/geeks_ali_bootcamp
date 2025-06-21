import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import ShopScreen from './pages/ShopScreen';
import ErrorBoundary from './classes/ErrorBoundary';


function App() {
  return (
    <div>
     <ErrorBoundary>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">MyApp</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">Shop</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<ErrorBoundary> <HomeScreen /> </ErrorBoundary>} />
      <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
      <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
      </Routes>
   </BrowserRouter> 
  </ErrorBoundary> 
    </div>
  );
}

export default App;
