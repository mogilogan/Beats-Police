import * as React from 'react';
import Screens from './Screens';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './reducers/index';
import thunk from 'redux-thunk';
const store = configureStore({
  reducer: reducers,

  devTools: true,
});
const App = () => {
  return (
    <Provider store={store} className="w-full">
      <Screens />
    </Provider>
  );
};

export default App;
