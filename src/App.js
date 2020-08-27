import React from 'react';

import {Provider} from 'react-redux';
import {CounterAction} from './redux/actions/CounterAction';
import store from './redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <CounterAction />
    </Provider>
  );
};

export default App;
