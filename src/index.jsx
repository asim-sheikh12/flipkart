import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import {Provider} from 'react-redux';
import Store from './Redux/Store/Store'

ReactDOM.render(
  <Provider store={Store}>
    <App />
    </Provider>
 ,  
  document.getElementById('root')
);

