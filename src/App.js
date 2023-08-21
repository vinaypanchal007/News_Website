import "./App.css";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entertainment from './Components/Entertainment.js';
import Home from './Components/Home.js';
import Health from './Components/Health.js'
import Politics from './Components/Politics.js';
import Sports from './Components/Sports.js';
import Technology from './Components/Technology.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/Sports' element={<Sports/>}/>
          <Route exact path="/Technology" element={<Technology/>}/>
          <Route exact path="/Politics" element={<Politics/>}/>
          <Route exact path="/Music" element={<Health/>}/>
          <Route exact path="/Entertainment" element={<Entertainment/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
