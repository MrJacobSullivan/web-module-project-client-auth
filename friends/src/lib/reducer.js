import { ACTIONS } from './actions'

export const initialState = {
  user: {
    isLoggedIn: false,
  },
  friends: {
    list: [],
    isLoading: false,
    error: '',
  },
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        user: {
          isLoggedIn: true,
        },
      }

    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: {
          isLoggedIn: false,
        },
        friends: {
          list: [],
          isLoading: false,
          error: '',
        },
      }

    case ACTIONS.GET_START:
      return {
        ...state,
        friends: {
          list: [],
          isLoading: true,
          error: '',
        },
      }

    case ACTIONS.GET_SUCCESS:
      return {
        ...state,
        friends: {
          list: action.payload,
          isLoading: false,
          error: '',
        },
      }

    case ACTIONS.GET_FAILURE:
      return {
        ...state,
        friends: {
          list: [],
          isLoading: false,
          error: action.payload,
        },
      }

    default:
      return state
  }
}
