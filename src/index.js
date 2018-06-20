import React from 'react'
import dotenv from 'dotenv'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './duck/store'
import App from './App'
import registerServiceWorker from './shared/utils/registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

dotenv.config()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
