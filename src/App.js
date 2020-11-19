import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  EditMovie,
  MovieDetails,
  MovieList,
  NewMovie,
  NotFound,
} from './pages/index';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
