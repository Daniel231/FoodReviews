import {ComponentType} from 'react';
import { BrowserRouter, Route, Switch, RouteProps} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import FoodList from '../pages/FoodList';
import ReviewsStatistics from '../pages/ReviewsStatistics';
import FoodStatistics from '../pages/FoodStatistics';
import NotFound from '../pages/NotFound';

interface IRouteMainLayoutWrapper extends RouteProps {
  component: ComponentType<any>
}

const RouteMainLayoutWrapper = ({
  component: Component,
  ...rest
}: IRouteMainLayoutWrapper) => {
  return (
    <Route {...rest} render={(props) =>
      <MainLayout {...props}>
        <Component {...props} />
      </MainLayout>
    } />
  );
}

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Switch>
            <RouteMainLayoutWrapper exact path="/" component={FoodList} />
            <RouteMainLayoutWrapper exact path="/Statistics/Reviews" component={ReviewsStatistics} />
            <RouteMainLayoutWrapper exact path="/Statistics/Food" component={FoodStatistics} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;