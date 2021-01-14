import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' render={(props) => <MovieList {...props} />} />
				<Route path='/movies/:id' render={(props) => <MovieDetails {...props} />} />
				<Route path='/movies/new' render={(props) => <NewMovie {...props} />} />
				<Route path='/movies/:id/edit' render={(props) => <EditMovie {...props} />} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
