import { Route, Switch } from 'react-router-dom';

import { RegisterProduct, Inventory, SalesPage } from '../pages';
import LoginPage from '../pages/LoginPage';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/vendas">
      <SalesPage />
    </Route>
    <Route path="/registrar-produto">
      <RegisterProduct />
    </Route>
    <Route path="/inventory">
      <Inventory />
    </Route>
    <Route path="/">
      <LoginPage />
    </Route>
  </Switch>
);
