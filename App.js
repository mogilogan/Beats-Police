import * as React from 'react';
import Screens from './screen/Screens';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './reducers/index';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';

const store = configureStore({
  reducer: reducers,

  devTools: true,
});
const App = () => {
  return (
    <Provider store={store}>
  <NavigationContainer>
      <Screens />
      </NavigationContainer>

    </Provider>
  );
};

export default App;
