import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL} from './actionsTypes';
import axios from 'axios';
import logout from './logout';
const API_KEY = 'AIzaSyAE0BVX1eHGCHfHQW5KOrcJr5F2ZfuAJ34';

export const signinStart = () => {
  return {
    type: AUTH_START
  }
};

export const signinSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    authData,
  }
};

export const signinFail = (error) => {
  return {
    type: AUTH_FAIL,
    error,
  }
};

export const signin = (email, password) => {
  return dispatch => {
    dispatch(signinStart());
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {email, password, returnSecureToken: true}).then(res => {
      console.log(res.data);
      dispatch(signinSuccess(res.data));
      localStorage.setItem('idToken', res.data.idToken);
      localStorage.setItem('expiryTime', new Date().getTime() + (+res.data.expiresIn*1000));
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('localId', res.data.localId);
      setTimeout(() => {
        dispatch(logout());
      }, +res.data.expiresIn*1000);
    }).catch(error => {
      console.log(error);
      dispatch(signinFail(error));
    });
  }
}

export const checkAuthStatus = () => {
  return dispatch => {
    const idToken = localStorage.getItem('idToken');
    if(!idToken) {
      dispatch(logout());
      return;
    }
    const expiryTime = localStorage.getItem('expiryTime');
    if(new Date().getTime() > expiryTime) {
      dispatch(logout());
      return;
    }
    const expiresIn = expiryTime - new Date().getTime();
    setTimeout(() => {
      dispatch(logout());
    }, expiresIn);
    const localId = localStorage.getItem('localId');
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(signinSuccess({idToken, localId, refreshToken}));
  }
}