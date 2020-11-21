import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.listMovies();
  }


  listMovies() {
    movieAPI.getMovies()
    .then((resolve) => this.setState({ movies: resolve, loading: false }))
    .catch((error) => console.log('Promises rejected: ', error));
  }


  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
