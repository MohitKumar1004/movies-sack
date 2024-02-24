import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig'
import Layout from './layouts/Layout.js'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.js';
import Header from './components/header/Header.js';
import Trailer from './components/trailer/Trailer.js';
import Reviews from './components/reviews/Reviews.js';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async() => {
    try {
      const response = await api.get("/api/v1/movies")
      setMovies(response.data)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMovies()
  },[])

  const getMovieData = async(movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`)
      const singleMovie = response.data
      setMovie(singleMovie)
      setReviews(singleMovie.reviews)
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}/>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}/>
          <Route path="/Reviews/:moviesId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}/>
        </Route>
      </Routes>      
    </div>
  );
}

export default App;
