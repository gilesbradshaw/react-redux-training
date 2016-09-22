import React from 'react'
import { render } from 'react-dom'


import { createStore } from 'redux'
import { combineReducers } from 'redux'
import adder from './store/reducers'

import App from './App'

import { AppContainer } from 'react-hot-loader'

let store = createStore(combineReducers({adder}))

import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <AppContainer>
      <App/>
    </AppContainer>
  </Provider>, 
  document.querySelector("#app"))

if(module.hot) {
  console.log('hot')
  module.hot.accept('./App', () => {
    const App = require('./App').default
    console.log('hot replacing')
    render(
      <Provider store={store}>
       <AppContainer>
        <App/>
      </AppContainer>
    </Provider>
    , document.querySelector("#app"));
  });
} else {
  console.log('not hot')  
}


