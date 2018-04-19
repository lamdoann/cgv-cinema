import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieDetail from '../components/MovieDetail';

const mapStateToProps = (state) => (
  {
    ...state.movieDetail.data,
  }
);

export default connect(mapStateToProps, null)(MovieDetail);
