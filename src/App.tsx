import { Provider } from 'react-redux';

import AppRouter from './routes/AppRoute';
import configureStore from './store/config';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppRouter/>
    </Provider>
  );
}

export default App;