import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, MovieDetailPage } from '../pages';

const RootRoute = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/movie/:id" component={MovieDetailPage} />
  </Switch>
);

export default RootRoute;