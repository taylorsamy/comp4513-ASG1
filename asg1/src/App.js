import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import MovieFilters from "./components/MovieFilters";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
      <Route path="moviefilters" element={<MovieFilters />} />
    </Routes>
  );
}

export default App;
