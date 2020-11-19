import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components/index';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      loading: true,
      movieId: props.match.params.id,
      movie: undefined,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { movieId } = this.state;

    this.setState(
      {
        loading: true,
      },
      () => {
        movieAPI.getMovie(movieId).then((response) => {
          this.setState({
            loading: false,
            movie: response,
          });
        });
      },
    );
  }

  handleClick() {
    const { movieId } = this.state;

    this.setState(
      {
        loading: true,
      },
      () => {
        movieAPI.deleteMovie(movieId).then(() => {
          this.setState({
            loading: false,
            shouldRedirect: true,
          });
        });
      },
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
        <div>
          <button onClick={this.handleClick}>DELETAR</button>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieDetails;
