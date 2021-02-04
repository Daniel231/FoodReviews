// import { Provider } from 'react-redux';
// import { configureStore } from './store/config/configureStore';
import AppRouter from './routes/AppRoute';

const App = () => {
  return (
        // <Provider store={configureStore()}>
          <AppRouter/>
        // {/* </Provider> */}
  );
}

export default App;