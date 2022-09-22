import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { RegisterProduct, Inventory } from '../pages';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/">
      <Inventory />
    </Route>
    <Route path="/registrar-produto">
      <RegisterProduct />
    </Route>
  </Switch>
);
