import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import {Provider} from 'react-redux';
import Store from './Redux/Store/Store'
import { Routing } from './Routes/Routes';

ReactDOM.render(
  <Provider store={Store}>
    <Routing />
    </Provider>
 ,  
  document.getElementById('root')
);

