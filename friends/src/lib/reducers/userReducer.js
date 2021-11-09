import { LOGIN, LOGOUT } from '../actions/userActions'

export const initialState = {
  username: '',
  isLoggedIn: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload,
        isLoggedIn: true,
      }

    case LOGOUT:
      return {
        ...state,
        username: '',
        isLoggedIn: false,
      }

    default:
      return state
  }
}
