import { ACTIONS } from './actions'

export const initialState = {
  user: {
    isLoggedIn: false,
  },
  friends: {
    friendsList: [],
    isLoading: false,
    error: '',
  },
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      }

    case ACTIONS.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }

    default:
      return state
  }
}
