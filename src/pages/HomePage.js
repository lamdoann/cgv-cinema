import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieListContainer from '../containers/MovieListContainer';

const HomePage = () => (
  <div className='movie-container'>
    <Header>CGV Cinema</Header>
    <MovieListContainer />
    <Footer>2018 Coc Coc Test</Footer>
  </div>
);

export default HomePage;