import authApi from '../api/authApi';
import BrowserStorage from '../lib/BrowserStorage';
import * as actionTypes from '../actions/actionTypes';

export function authLogin(auth_params){
  return (dispatch) => {
    dispatch(authLoginInit());
    return authApi.Login(auth_params).then(response => {
      const expirationDate = new Date(new Date().getTime() + (1000*(response.expires_in)));
      BrowserStorage.setAuthExpirationDate(expirationDate);
      dispatch(authLoginSuccess(response));
      dispatch(autoAuthLogout());

    }).catch(error => {
      dispatch(authLoginFailure(error));
    })
  }
}

export const onAuthVerifyLogin = () => {
  return dispatch => {
    const auth_token = BrowserStorage.getAuthToken();
    if(auth_token){
      dispatch(syncAuthVerifyLogin(auth_token));
    }else{
      dispatch(authLogoutSuccess());
    }
  }
}

export const authLogout = () => {
  return dispatch => {
    dispatch(authLogoutSuccess());
  }
}

export const autoAuthLogout = () => {
  return dispatch => {
    const duration = BrowserStorage.getSessionDuration();
    setTimeout(() => {
      dispatch(authLogoutSuccess());
    }, duration*1000);
  }
}

export function authLoginInit(){
  return {type: actionTypes.AUTH_LOGIN_INIT, isLoading: true}
}

export function authLoginSuccess(response){
  return {type: actionTypes.AUTH_LOGIN_SUCCESS, auth_token: response.auth_token, isLoading: false}
}

export function authLoginFailure(error){
  return {type:  actionTypes.AUTH_LOGIN_FAILURE, isLoading: false, error: error}
}

export function syncAuthVerifyLogin(auth_token){
  return {type: actionTypes.AUTH_VERIFY_LOGIN, auth_token: auth_token}
}

export function authLogoutSuccess(){
  return {type: actionTypes.AUTH_LOGOUT_SUCCESS}
}