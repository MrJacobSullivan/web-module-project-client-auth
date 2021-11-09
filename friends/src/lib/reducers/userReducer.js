import { LOGIN, LOGOUT } from '../actions/userActions'

export const initialState = {
  isLoggedIn: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      }

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }

    default:
      return state
  }
}
