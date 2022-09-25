import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { RegisterProduct, Inventory, SalesPage } from '../pages';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/vendas">
      <SalesPage />
    </Route>
    <Route path="/registrar-produto">
      <RegisterProduct />
    </Route>
    <Route path="/">
      <Inventory />
    </Route>
  </Switch>
);
