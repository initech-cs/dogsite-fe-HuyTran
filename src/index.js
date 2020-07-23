import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const initialState = {
  showLogin: false,
  showSignup: false,
  showCreateKennel: false,
  showUpdateUser: false,
  // showUser: ""
}

function reducer(state = initialState, action){
  if(action.type === "LOGIN"){
    state.showLogin = action.payload.showLogin
    // state.showUser = action.payload.showUser
  }
  if(action.type === "LOGOUT"){
    
  }
  if(action.type === "SIGNUP"){
    state.showSignup = action.payload.showSignup
  }
  if(action.type === "C-KENNEL"){
    state.showCreateKennel = action.payload.showCreateKennel
  }
  if(action.type === "UPDATE"){
    state.showUpdateUser = action.payload.showUpdateUser
  }
  state = {...state} 
  return state
}

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
