import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList.js';
import MovieDetails from './pages/MovieDetails.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
