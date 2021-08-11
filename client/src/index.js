import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css';
import {rootReducer} from "./redux/reducers/rootReducer";
import App from './App'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    devTools,
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
