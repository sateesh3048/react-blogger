import * as types from '../actions/actionTypes';
import {updateObject} from './utility';
import BrowserStorage from '../lib/BrowserStorage'; 

const initialState = {
  auth_token: null,
  error: null,
  isLoading: false,
  isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
  
  switch(action.type){
    case types.AUTH_LOGIN_INIT:
      return updateObject(state, {isLoading: action.isLoading})  
    case types.AUTH_LOGIN_SUCCESS:
      let is_logged_in = (action.auth_token !== null)
      BrowserStorage.setAuthToken(action.auth_token);
      return updateObject(state, {auth_token: action.auth_token,isLoading: action.isLoading, isLoggedIn: is_logged_in})  
    case types.AUTH_LOGIN_FAILURE:
      return updateObject(state, {error: action.error,isLoading: action.isLoading})  
    case types.AUTH_VERIFY_LOGIN:
      is_logged_in = (action.auth_token !== null)
      return updateObject(state, {auth_token: action.auth_token, isLoggedIn: is_logged_in});
    case types.AUTH_LOGOUT_SUCCESS:
      BrowserStorage.removeExpirationDate();
      BrowserStorage.removeAuthToken();
      return updateObject(state, {auth_token: null, isLoggedIn: false});
    default: 
      return state;
  }
};

export default authReducer;