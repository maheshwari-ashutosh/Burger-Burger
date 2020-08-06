import * as actionTypes from './actionsTypes';

export const authStart = () => {
  console.log('Auth start');
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const auth = (email, password) => {
  console.log('Auth');
  return dispatch => {
    setTimeout(() => {
      dispatch(authStart());
    }, 2000);
  }
}