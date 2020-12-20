import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';



class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }  

  render() {
    const { movies, Loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
