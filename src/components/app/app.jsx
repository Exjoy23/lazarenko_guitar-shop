import React from 'react';
import { Route, Switch } from 'react-router';
import { AppRoute } from '../../const';
import { MainPage } from '../pages/main-page/main-page';
import { CatalogPage } from '../pages/catalogg-page/catalog-page';
import { CartPage } from '../pages/cart-page/cart-page';
import './app.scss';

function App() {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN} component={MainPage} />
      <Route exact path={AppRoute.CATALOG} component={CatalogPage} />
      <Route exact path={AppRoute.CART} component={CartPage} />
    </Switch>
  );
}

export { App };
