import React from 'react';
import { Dimmer, Loader, Divider } from 'semantic-ui-react';
import MovieItem from '../MovieItem';
import './style.css';

const MovieList = ({ movies = [], isRequesting }) => {
  const nowMovies = movies.filter(movie => movie).filter(movie => movie.category_id === 0);
  const soonMovies = movies.filter(movie => movie).filter(movie => movie.category_id === 1);

  return (
    <div className="movie-list">
      <div>
        {(nowMovies.length > 0) 
          && <h2 className="category-header">Now Showing</h2>
        }
        {nowMovies.map(movie => (<MovieItem key={movie.id} {...movie} />))}
      </div>
      <div>
        {(soonMovies.length > 0)
          && (
            <React.Fragment>
              <Divider />
              <h2 className="category-header">Coming Soon</h2>
            </React.Fragment>
          )
        }
        {soonMovies.map(movie => (<MovieItem key={movie.id} {...movie} />))}
      </div>
    </div>
  );
};

export default MovieList;
