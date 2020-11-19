import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      movie: {},
      loading: false
    }
  }

  componentDidMount(){
  const id = this.props.match.params.id;
  this.get(id)
  }

  get = async(id) => {
    const movie = await movieAPI.getMovie(id);
    this.setState({movie: movie, loading: true})
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      this.state.loading ?
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div> : <Loading />
    );
  }
}

export default MovieDetails;
