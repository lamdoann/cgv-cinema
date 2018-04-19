import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Icon } from 'semantic-ui-react';
import TrailerModal from '../TrailerModal';
import './style.css';

const MovieItem = ({ id, name, movie_endtime, movie_trailer, release_date, thumbnail }) => (
  <Item.Group className='movie-item'>
    <Item>
      <Item.Image size='small' src={thumbnail} />
      <Item.Content>
        <Item.Header as='h2'>{name}</Item.Header>
        <Item.Description>
          <p>{`Running time: ${movie_endtime} minutes`}</p>
          <p>{`Release date: ${new Date(release_date).toDateString()}`}</p>
          <p>
            <Link to={`/movie/${id}`}>
              Detail <Icon as='i' name='angle double right' />
            </Link>
          </p>
          <TrailerModal name={'View Trailer'} link={movie_trailer} />
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default MovieItem;
