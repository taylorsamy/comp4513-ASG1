import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Home />
    // </div>

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
