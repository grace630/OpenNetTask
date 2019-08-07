import 'whatwg-fetch';

import {
  FETCHLOGINDATASUCCESS,
  FETCHUSERLISTSSUCCESS,
  FILTERUSERS
} from './actionType';

const action = {
  fetchLoginData() {
    return (dispatch) => {
      fetch("http://opn.mobiusloop.cc/api/user/login", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ 'accountId': 'admin', 'pswd': '123456' })
      }).then(response => response.json())
        .then(data => dispatch({
          type: FETCHLOGINDATASUCCESS,
          data,
        }));
    };
  },
  fetchUserLists(token) {
    return (dispatch) => {
      fetch("http://opn.mobiusloop.cc/api/users", {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        method: "GET",
      }).then(response => response.json())
        .then(data => dispatch({
          type: FETCHUSERLISTSSUCCESS,
          data,
        }));
    };
  },
  filterUserLists: filterUsers => ({ type: FILTERUSERS, filterUsers })
};
export default action;
