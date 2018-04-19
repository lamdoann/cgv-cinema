import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { onRequest } from '../actions/movies';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieListContainer from '../containers/MovieListContainer';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div className='movie-container'>
        <Dimmer page active={this.props.isRequesting}>
          <Loader />
        </Dimmer>
        <Header>CGV Cinema</Header>
        <MovieListContainer />
        <Footer>2018 Coc Coc Test</Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    isRequesting: state.movies.isRequesting,
    isError: state.movies.isError,
    message: state.movies.message,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onLoad: bindActionCreators(onRequest, dispatch),
  }
);

HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePage;