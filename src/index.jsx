import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/header';
import MovieList from './components/movieList';
import movies from './movies.js'

const App = () => (
  <>
    <Header />
    <MovieList movies={movies}/>
  </>
);

render(<App />, document.querySelector('#app'));
