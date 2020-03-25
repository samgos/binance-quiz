import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './utils/serviceWorker'

import { StateProvider } from './state'
import App from './App'

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

serviceWorker.unregister()
