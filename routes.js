import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

/**
 * Wrapping the Master component with this decorator provides an easy way
 * to redirect the user to a login experience if we don't know who they are.
 */
import UserIsAuthenticated from './src/decorators/UserIsAuthenticated';

/**
 * Routes are used to declare your view hierarchy
 * See: https://github.com/rackt/react-router/blob/master/docs/API.md
 */
import Master from './src/components/Master';
import Layout from './src/components/Layout';
import Feed from './src/components/Feed';
import Login from './src/components/Login';

export default (
  <Route>
    <Route path="/login" component={Login} />

    <Route component={UserIsAuthenticated(Master)}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Feed} />
      </Route>
    </Route>
  </Route>
);
