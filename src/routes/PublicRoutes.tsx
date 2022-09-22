import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { RegisterProduct, Inventory } from '../pages';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/registrar-produto">
      <RegisterProduct />
    </Route>
    <Route path="/">
      <Inventory />
    </Route>
  </Switch>
);
