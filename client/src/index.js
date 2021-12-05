import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css';
import {rootReducer} from "./redux/reducers/rootReducer";
import AppContainer from './AppContainer';

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//window.__store__ = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
