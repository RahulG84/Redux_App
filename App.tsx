import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
// import {Store} from './src/redux/shoesRedux/store/Store';
import CartStore from './src/reduxToolKit/src/redux/store/cartStore';

const App = () => {
  return (
    <Provider store={CartStore}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
