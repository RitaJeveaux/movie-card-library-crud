import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, id, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <header>
          <h1>Movie Card</h1>
        </header>
        <div>
          <h2>{title}</h2>
          <p>{storyline}</p>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
