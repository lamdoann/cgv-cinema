import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieList from '../components/MovieList';

const mapStateToProps = (state) => (
  {
    movies: state.movies.data,
    isRequesting: state.movies.isRequesting,
    isError: state.movies.isError,
    message: state.movies.message,
  }
);

export default connect(mapStateToProps, null)(MovieList);
