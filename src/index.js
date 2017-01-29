import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import Home from './app/Home';
import Setup from './app/Setup';
import Estimate from './app/Estimate';
import Confirmation from './app/Confirmation';
import UploadDocuments from './app/UploadDocuments';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="setup" component={Setup}/>
      <Route path="upload" component={UploadDocuments}/>
      <Route path="estimate" component={Estimate}/>
      <Route path="confirmation" component={Confirmation}/>

    </Route>
  </Router>,
  document.getElementById('root')
);
