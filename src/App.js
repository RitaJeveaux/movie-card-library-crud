import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
