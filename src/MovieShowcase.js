import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
//take MovieData and, for every object inside, render a MovieCard component, 
//passing the object data in as props

  generateMovieCards = () => {
    return movieData.map((movie, index) => 
    <MovieCard 
      key={index}
      title={movie.title} 
      IMDBRating={movie.IMDBRating}
      genres={movie.genres}
      poster={movie.poster}
    />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
