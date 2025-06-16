import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns,faBuilding,faEarthOceania} from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="App">    
      <NavBar />
      <Section/>
      <ContactUs />
    </div>
  );
}


function NavBar() {
  return (
    <nav className="navbar navbar-light ornagBg "> 
      <a className="navbar-brand text-white" href="#">
        <h1>Bootstrap</h1>
        <p>We specialise in something ...</p>
      </a>
    </nav>
  );
}
function Section(){
  return (
    <>
    <section className="container my-5">
      <div className="row">
        <div className="col-md-2 d-flex align-items-center justify-content-start">
                    <FontAwesomeIcon icon={faBuilding} className="w-50" style={{ fontSize: '6rem', color : "#F4511E" }}/> 
        </div>
        <div className="col-md-10 text-start">
          <h2>About the Company</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </section>
       <section className="container my-5 bg-light">
      <div className="row">
        <div className="col-md-2 d-flex align-items-center justify-content-start">
          
            <FontAwesomeIcon icon={faEarthOceania} className="w-50" style={{ fontSize: '6rem', color : "#F4511E" }} />

        </div>
        <div className="col-md-10 text-start">
          <h2>Our Values</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        </div>
      </div>
    </section>
       <section className="container my-5">
      <div className="row">
        <div className="col-md-2 d-flex align-items-center justify-content-start">
                    <FontAwesomeIcon icon={faBuildingColumns}  className="w-50" style={{ fontSize: '6rem', color : "#F4511E" }}/>
        </div>
        <div className="col-md-10 text-start">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        </div>
      </div>
    </section>
    </>
    
  );
}
function ContactUs(){
  return (
    <section className="container my-5 col-md-12 bg-light p-5 rounded max-w-100">
      <div className="row align-items-center">
        <div className="col-md-2 d-flex align-items-center justify-content-start">

        </div>
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: "#F4511E", color: "#fff" }}>Send</button>
          </form>
        </div>
        <div className="col-md-4">
          <h5>Contact Information</h5>
          <p><strong>Phone:</strong> +212 600 000 000</p>
          <p><strong>Email:</strong> info@company.com</p>
          <p><strong>Address:</strong> 123 Main St, Casablanca, Morocco</p>
        </div>
      </div>
    </section>
  );
}

export default App;