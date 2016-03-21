import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN
} from '../constants/ActionTypes';

const LOGIN_URL = 'https://oauth.secure.pixiv.net/auth/token';

function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

function receiveLogin(auth) {
  return {
    type: RECEIVE_LOGIN,
    auth
  };
}

export function login(username, password) {
  return dispatch => {
    dispatch(requestLogin());
    return fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referer': 'http://www.pixiv.net/',
        'Origin': ''
      },
      // mode: 'no-cors',
      body: JSON.stringify({
        client_id: 'bYGKuGVw91e0NMfPGp44euvGt59s',
        client_secret: 'HP3RmkgAmEGro0gn1x9ioawQE8WMfvLXDz3ZqxpK',
        grant_type: 'password',
        username: username,
        password: password
      })
    })
      .then(response => {
        console.log(response)
        response.json()
      })
      .then(json => dispatch(receiveLogin(json)));
  };
}
