import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();

    this.getMovieDetails = this.getMovieDetails.bind(this);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovieDetails(this.props.id);
  }

  async getMovieDetails(idMovie) {
    this.setState(
      {
        loading: true,
        shouldRedirect: false,
      },
      async () => {
        const movieDetail = await movieAPI.getMovie(idMovie);
        this.setState(() => ({ loading: false, movie: movieDetail }));
      },
    );
  }

  async deleteMovie(idMovie) {
    const { onClick } = this.props;
    onClick();
    await movieAPI.deleteMovie(idMovie);
  }
  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;
    const { id, onClick } = this.props;
    const urlMovieEdit = `/movies/${id}/edit`;

    return (
      <div>
        {loading ? <Loading /> :
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h1>{title}</h1>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>}
        <button><Link to="/" onClick={onClick}> VOLTAR</Link></button>
        <button><Link to={urlMovieEdit}>EDITAR</Link></button>
        <button>
          <Link to="/" onClick={() => this.deleteMovie(id)}>DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = ({
  id: PropTypes.number,
  onClick: PropTypes.func,
}).isRequired;

export default MovieDetails;
