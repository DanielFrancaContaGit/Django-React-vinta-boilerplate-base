import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import configureStore from './store';
import SentryBoundary from './utils/SentryBoundary';
import Myapp from './app/myfistapp';

const store = configureStore({});
const App = () => (
  <SentryBoundary>
    <Provider store={store}>
      <Myapp />
    </Provider>
  </SentryBoundary>
);

export default hot(App);
