import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import History from './pages/History';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/history" exact component={History} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
