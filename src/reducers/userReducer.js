export default function reducer(state = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {...state, name: action.payload};
      break;
    case "CHANGE_AGE":
      state = {...state, age: action.payload};
      break;
    case "SAVE_USERS_SUCCESS":
      return {...state, fetching: false, fetched: true, users: action.payload};
      break;
    case "SAVE_USERS_ERROR":
      return {...state, fetching: false, error: action.payload};
      break;
    case "SAVE_USERS_START":
      return {...state, fetching: true};
      break;
  }

  return state;

}