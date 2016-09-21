import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { AppContainer } from 'react-hot-loader'

render(
  <AppContainer><App/></AppContainer>, 
  document.querySelector("#app"))

if(module.hot) {
  console.log('hot')
  module.hot.accept('./App', () => {
    const App = require('./App').default
    console.log('hot replacing')
    render(
       <AppContainer>
        <App/>
      </AppContainer>
    , document.querySelector("#app"));
  });
} else {
  console.log('not hot')  
}


