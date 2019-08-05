import {
  FETCHDATASUCCESS,
} from '../actions/actionType';

export const iniState = {
  loginData: null,
};

const Reducer = (state = iniState, action) => {
  switch (action.type) {
  case FETCHDATASUCCESS:
    return {
      ...state,
      loginData: action.data,
    };
  default:
    return state;
  }
};

export default Reducer;