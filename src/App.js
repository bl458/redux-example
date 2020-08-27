import React from 'react';
import {Provider} from 'react-redux';

import ConnectedCounter from './redux/actions/CounterAction';
import store from './redux/reducers/index';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

export default App;
