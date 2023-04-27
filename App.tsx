import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import {Store} from './src/redux/shoesRedux/store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
