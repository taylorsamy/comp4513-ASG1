import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Default from './components/Default.js';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  // state hook for movie data
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {

    // check if the movie data is already in local storage
    if (localStorage.getItem('movieData')) {
      // get the movie data from local storage
      const data = JSON.parse(localStorage.getItem('movieData'));
      // set the movie data
      setMovieData(data);
      return;
    } else {

      // fetch data from the API
      fetch('https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=20')
        .then(response => response.json())
        .then(data => {
          // set the movie data
          setMovieData(data);
          // save the movie data to local storage
          localStorage.setItem('movieData', JSON.stringify(data));
        })
        .catch(error => console.log(error));
    }
  }, []);









  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/default" element={<Default />} />
    </Routes>
  );
}

export default App;
