import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.renderMovieList = this.renderMovieList.bind(this);
  }

  async fetchMovies() {
    const requestMovie = await movieAPI.getMovies();
    this.setState({
      movies: requestMovie,
    });
  }

  componentDidMount() {
    this.fetchMovies();
  }

  renderMovieList() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        {movies.length === 0 ? <Loading /> : this.renderMovieList()}
      </div>
    );
  }
}

export default MovieList;
