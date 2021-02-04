import { BrowserRouter, Route, Switch} from 'react-router-dom';

import ReviewsList from '../pages/ReviewsList';
import ReviewsStatistics from '../pages/ReviewsStatistics';
import FoodStatistics from '../pages/FoodStatistics';
import NotFound from '../pages/NotFound';


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ReviewsList} />
            <Route exact path="/Statistics/Reviews" component={ReviewsStatistics} />
            <Route exact path="/Statistics/Food" component={FoodStatistics} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;