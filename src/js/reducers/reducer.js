import {
  FETCHLOGINDATASUCCESS,
  FETCHUSERLISTSSUCCESS,
  FILTERUSERS
} from '../actions/actionType';

export const iniState = {
  loginData: null,
  token: '',
  userLists: null,
  filterUsers: null
};

const Reducer = (state = iniState, action) => {
  switch (action.type) {
    case FETCHLOGINDATASUCCESS:
      return {
        ...state,
        loginData: action.data,
        token: action.data.token,
        userLists: null,
        filterUsers: null
      };
    case FETCHUSERLISTSSUCCESS:
      return {
        ...state,
        userLists: action.data,
        filterUsers: null
      };
    case FILTERUSERS:
      let filUsers = state.userLists;
      const selAge = document.getElementById('selAge').value;
      const inputAge = document.getElementById('ageNum').value;
      const selNameLength = document.getElementById('selNameLength').value;
      const inputNameLength = document.getElementById('nameLength').value;
      if (inputAge)
        filUsers = filUsers.filter(data => eval(data.age + selAge + inputAge));
      if (inputNameLength) {
        filUsers = filUsers.filter(data => {
          let l = data.firstName.length + data.lastName.length;
          return eval(l + selNameLength + inputNameLength);
        });
      }
      return {
        ...state,
        filterUsers: filUsers
      };
    default:
      return state;
  }
};

export default Reducer;