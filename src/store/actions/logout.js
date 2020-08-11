import {LOGOUT} from './actionsTypes';

const logout = () => {
  localStorage.removeItem('idToken');
  localStorage.removeItem('expiryTime');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('localId');
  return {
    type: LOGOUT,
  };
};

export default logout;
