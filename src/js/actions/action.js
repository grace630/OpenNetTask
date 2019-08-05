import 'whatwg-fetch';

import {
  FETCHDATASUCCESS,
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
        body: JSON.stringify({'accountId': 'admin', 'pswd': '123456'})
      }).then(response => response.json())
        .then(data => dispatch({
          type: FETCHDATASUCCESS,
          data,
        }));
    };
  },
};

export default action;
