import {SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL} from './actionsTypes';
import axios from 'axios';
const API_KEY = 'AIzaSyAE0BVX1eHGCHfHQW5KOrcJr5F2ZfuAJ34';

export const signupStart = () => {
  return {
    type: SIGNUP_START
  }
};

export const signupSuccess = (authData) => {
  return {
    type: SIGNUP_SUCCESS,
    authData,
  }
};

export const signupFail = (error) => {
  return {
    type: SIGNUP_FAIL,
    error,
  }
};

export const signup = (name, email, password) => {
  return dispatch => {
    dispatch(signupStart());
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {email, password, returnSecureToken: true}).then(res => {
      console.log(res.data);
      dispatch(signupSuccess(res.data));
    }).catch(error => {
      console.log(error);
      dispatch(signupFail(error));
    });
  }
}