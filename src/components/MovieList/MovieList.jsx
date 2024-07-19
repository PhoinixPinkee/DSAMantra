import React, { useEffect, useState } from 'react'
import Popular from '../../assets/populer.png';
import './MovieList.css'

import MovieCard from './MovieCard';
import Loader from '../common/Loader';
function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const [Sort, setSort] = useState("")
  useEffect(()=>{
     
      fetchMovies();
      
  },[]);
 const fetchMovies= async() =>{
  setisLoading(true);
 const response=  await  fetch("https://dsa-channel-list.onrender.com/channels");
 const data= await response.json();
 setMovies(data);
 setisLoading(false);
 };
 const handleFilter= (prob )=>{
  setSort(prob);
  const filtered=movies.filter( movie=> movie.problem==prob);
  setMovies(filtered);
 }

  return (
  <section className="movie_list">
    <header className='movie_list_header'>
        <h2 className='movie_list_heading'>Popular<img src={Popular} alt='populer emogi' className='navbar_emogi'/></h2>
        <div className='movie_list_fs'>
          <ul className="movie_filter">
            <li className="movie_filter_item active">Dry</li>
            <li className="movie_filter_item">Run</li>
            <li className="movie_filter_item">Code</li>
          </ul>
          <select name="" id="" className="movie_sorting">
            <option value="">Sort By</option>
            <option value="" onChange={()=> handleFilter(" Concept wise  ")}>Concept Wise</option>
            <option value="" onChange={()=> handleFilter(" Problem wise  ")}>Problem Wise</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
    </header>
   
    <div className="movie_cards">
    {isLoading && <Loader/>}
  {
      movies.map(movie =>  <MovieCard key={movie.id}  movie={movie} /> )
     }
    
    </div>
  </section>
  );
};




export default MovieList;
