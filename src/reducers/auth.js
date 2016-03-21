import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN
} from '../constants/ActionTypes';

import objectAssign from 'object-assign';

const initialState = {
  isFetching: false,
  authrization: {},
  hasError: false
};

function authAppState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
          isFetching: true,
          authrization: {},
          hasError: false
        });
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        isFetching: false,
        authrization: action.auth,
        hasError: !!action.auth.errcode
      });

    default:
      return state;
  }
}

module.exports = authAppState;
