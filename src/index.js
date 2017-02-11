import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import Home from './app/Home';
import Setup from './app/Setup';
import Estimate from './app/Estimate';
import Confirmation from './app/Confirmation';
import UploadDocuments from './app/UploadDocuments';
import SignUp from './app/SignUp';

import store from './store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<Provider store={store} >
    <Router history={hashHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="setup" component={Setup}/>
        <Route path="upload" component={UploadDocuments}/>
        <Route path="estimate" component={Estimate}/>
        <Route path="confirmation" component={Confirmation}/>
        <Route path="signup" component={SignUp}/>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import thunk from 'redux-thunk';
// import axios from 'axios';
//
//
// const initialUserState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null
// };
//
// const userReducer = (state=initialUserState, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       state = {...state, name: action.payload};
//       break;
//     case "CHANGE_AGE":
//       state = {...state, age: action.payload};
//       break;
//     case "SAVE_USERS_SUCCESS":
//       return {...state, fetching:false, fetched: true, users: action.payload};
//       break;
//     case "SAVE_USERS_ERROR":
//       return {...state, fetching: false, error:action.payload}
//       break;
//     case "SAVE_USERS_START":
//       return {...state, fetching: true};
//       break;
//   }
//
//
//   return state;
//
// };
//
// const tweetReducer = function(state=[], action) {
//   return state;
// };
//
// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetReducer
// });
//
// const logger = (store) => (next) => (action) => {
//   console.log("previous state", store);
//   console.log("action fired", action);
//   next(action);
// };
//
// const middleware = applyMiddleware(thunk, logger);
//
//
// const store = createStore(reducers, {}, middleware);
//
// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });
//
// window.store = store;
//
//
// store.dispatch((dispatch) => {
//   dispatch({type: "SAVE_USERS_START"});
//
//   //async
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//     .then((response) => {
//       dispatch({type: "SAVE_USERS_SUCCESS", payload: response.data});
//     })
//     .catch((err) => {
//       dispatch({type: "SAVE_USERS_ERROR", payload: err});
//     })
// });
//
//
