import React from 'react';
import { Item } from 'semantic-ui-react';
import './style.css';

const MovieDetail = ({
  name,
  full_description,
  genre,
  movie_actress,
  movie_director,
  movie_endtime,
  movie_trailer,
  release_date,
  thumbnail,
  url
}) => (
  <div className='movie-detail'>
    <Item.Group>
      <Item>
        <Item.Image size='medium' src={thumbnail} />
        <Item.Content>
          <Item.Header as='h2'>{name}</Item.Header>
          <Item.Meta>
            <span>{`${new Date(release_date).getFullYear()}`}</span>
            <span>{`   ${movie_endtime} minutes`}</span>
          </Item.Meta>
          <Item.Description>{full_description}</Item.Description>
          <Item.Extra style={{ marginTop: '20px' }}>
           <span className='movie-extra'>{`Starring: ${movie_actress}`}</span>
          </Item.Extra>
          <Item.Extra>
           <span className='movie-extra'>{`Directed by: ${movie_director}`}</span>
          </Item.Extra>
          <Item.Extra>
           <span className='movie-extra'>{`Genre: ${genre}`}</span>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </div>
);

export default MovieDetail;
