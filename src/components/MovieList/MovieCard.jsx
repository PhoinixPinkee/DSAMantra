import React from 'react'
import './MovieCard.css';
import Star from '../../assets/star.png'
function MovieCard({movie}) {
  return (
      <a href={movie.link} className='movie_card'><img src={movie.profile} alt='' className='movie_poster'/>
      <div className="movie_details">
        <h3 className='movie_details_heading'>{movie.channelName}</h3>
        <div className="movie_date_rate">
            <p>{movie.problem}</p>
            <p><img src={Star} alt="star"  className='card_emogi'/></p>
        </div>
        <p className="movie_description">{movie.description.slice(0,100)+"..."}</p>
        </div></a>
  )
}
export default MovieCard;
