import axios from 'axios';

export function fetchUsers() {
  return function (dispatch) {

  dispatch({type: "SAVE_USERS_START"});

  axios.get("http://rest.learncode.academy/api/wstern/users")
    .then((response) => {
      dispatch({type: "SAVE_USERS_SUCCESS", payload: response.data});
    })
    .catch((err) => {
      dispatch({type: "SAVE_USERS_ERROR", payload: err});
    })
  }
  
}

export function setUserName(name) {
  return {
    type: 'CHANGE_NAME', payload: name
  }
}

export function setUserAge(age) {
  return {
    type: 'CHANGE_AGE', payload: age
  }
}