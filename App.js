import 'react-native-gesture-handler';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/store/reducers'
import Navigation from './src/navigation';
import thunk from 'redux-thunk';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const App = () =>  {
  return (
    <>
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
    </>
  );
};


export default App;
