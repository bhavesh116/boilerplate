import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MainProfile from './components/MainProfile'
import Blogs from './components/Blogs'


const history = createBrowserHistory();

// eslint-disable-next-line import/prefer-default-export
export const RootRoutes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route
        exact
        path="/"
        component={MainProfile}
      />
      <Route
        path="/blogs"
        component={Blogs}
      />
      <Redirect
       from="/" 
       to="/"
      />
    </Switch>
  </BrowserRouter>
);
