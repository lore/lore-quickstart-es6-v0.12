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
import Logout from './src/components/Logout';
import UserTweets from './src/components/UserTweets';

export default (
  <Route>
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />

    <Route component={UserIsAuthenticated(Master)}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Feed} />
        <Route path="users/:userId" component={UserTweets} />
      </Route>
    </Route>
  </Route>
);
