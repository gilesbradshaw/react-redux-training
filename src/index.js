import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import adder from './store/reducers'

import App from './components/App'

import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import { combineEpics } from 'redux-observable'
import addEpic from './epics/addEpic'
import subtractEpic from './epics/subtractEpic'
import { createEpicMiddleware } from 'redux-observable';
const rootEpic = combineEpics(
  addEpic,
  subtractEpic
)
const epicMiddleware = createEpicMiddleware(rootEpic);


let store = createStore(combineReducers({adder}), applyMiddleware(epicMiddleware))






render(
  <Provider store={store}>
    <AppContainer>
      <App/>
    </AppContainer>
  </Provider>, 
  document.querySelector("#app"))

if(module.hot) {
  console.log('hot')
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default
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


