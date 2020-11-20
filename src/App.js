import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route path="" component={NotFound} />
    </Router>
  );
}

export default App;
