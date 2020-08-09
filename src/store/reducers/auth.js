import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  idToken: null,
  refrestToken: null,
  userId: null,
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SIGNUP_START:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.SIGNUP_SUCCESS:
      return {
        idToken: action.authData.idToken,
        refrestToken: action.authData.refreshToken,
        userId: action.authData.localId,
        loading: false,
      }
    case actionTypes.SIGNUP_FAIL: {
      return {
        idToken: null,
        refrestToken: null,
        userId: null,
        loading: false,
      }
    }
    default:
      return state;
  }
}

export default reducer;