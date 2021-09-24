import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';

import MainPage from '../pages/MainPage';
import Recipe from '../pages/Recipe';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={MainPage} exact></Route>
        <Route path="/recipe/:recipe" component={Recipe}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

