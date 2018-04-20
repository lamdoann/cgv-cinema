import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { onRequest } from '../actions/movieDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieDetailContainer from '../containers/MovieDetailContainer';

class MovieDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoad(this.props.match.params.id);
  }

  render() {
    return (
      <div className="movie-container">
        <Dimmer page active={this.props.isRequesting}>
          <Loader />
        </Dimmer>
        <Header>CGV Cinema</Header>
        <MovieDetailContainer />
        <Footer>2018 Coc Coc Test</Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isRequesting: state.movieDetail.isRequesting,
    isError: state.movieDetail.isError,
    message: state.movieDetail.message,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onLoad: bindActionCreators(onRequest, dispatch),
  }
);

MovieDetailPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);

export default MovieDetailPage;
