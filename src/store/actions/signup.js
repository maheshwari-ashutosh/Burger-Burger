import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL} from './actionsTypes';
import axios from 'axios';
import logout from './logout';
const API_KEY = 'AIzaSyAE0BVX1eHGCHfHQW5KOrcJr5F2ZfuAJ34';

export const signupStart = () => {
  return {
    type: AUTH_START
  }
};

export const signupSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    authData,
  }
};

export const signupFail = (error) => {
  return {
    type: AUTH_FAIL,
    error,
  }
};

export const signup = (name, email, password) => {
  return dispatch => {
    dispatch(signupStart());
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {email, password, returnSecureToken: true}).then(res => {
      console.log(res.data);
      localStorage.setItem('idToken', res.data.idToken);
      localStorage.setItem('expiryTime', new Date().getTime() + (+res.data.expiresIn*1000));
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('localId', res.data.localId);
      dispatch(signupSuccess(res.data));
      setTimeout(() => {
        dispatch(logout());
      }, +res.data.expiresIn*1000);
    }).catch(error => {
      console.log(error);
      dispatch(signupFail(error));
    });
  }
}