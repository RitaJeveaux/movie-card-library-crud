import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isFetching: true,
    }
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const movieLis = await movieAPI.getMovie();
    this.setState({
      movies: MovieList,
      isFetching: false,
    })
  }

  render() {
    const { movies, isFetching } = this.state;

    if (isFetching) return <Loading />;
    console.log(this.state.movies);

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <LINK to="/movies/new">ADICIONAR CARTÃO</LINK>
      </div>
    );
  }
}

export default MovieList;
