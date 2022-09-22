import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { RegisterProduct } from '../pages/RegisterProduct';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/">
      <RegisterProduct />
    </Route>
  </Switch>
);
