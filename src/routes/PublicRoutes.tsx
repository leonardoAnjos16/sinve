import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { RegisterProduct, Inventory, Sales } from '../pages';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/vendas">
      <Sales />
    </Route>
    <Route path="/registrar-produto">
      <RegisterProduct />
    </Route>
    <Route path="/">
      <Inventory />
    </Route>
  </Switch>
);
