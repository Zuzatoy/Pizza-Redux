import React from 'react';
import { Provider } from 'react-redux'

import { store } from '../../store/configureStore';
import { Pizza } from '../Pizza'
import { Buttons } from '../Buttons';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Buttons />
      <Pizza />
    </div>
  </Provider>
);

export default App;
