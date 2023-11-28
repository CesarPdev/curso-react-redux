import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from'redux-thunk'
import App from './App.jsx'
import { logger } from './middlewares/index.jsx'
import './index.css'
import rootReducer from './reducers/rootReducer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger)
);

const store = createStore(
  rootReducer,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
