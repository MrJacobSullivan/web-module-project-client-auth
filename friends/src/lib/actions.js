export const ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  GET_START: 'GET_START',
  GET_SUCCESS: 'GET_SUCCESS',
  GET_FAILURE: 'GET_FAILURE',
}

export const actions = {
  login: () => ({ type: ACTIONS.LOGIN }),
  logout: () => ({ type: ACTIONS.LOGOUT }),

  getStart: () => ({ type: ACTIONS.GET_START }),
  getSuccess: (friends) => ({ type: ACTIONS.GET_SUCCESS, payload: friends }),
  getFailure: (error) => ({ type: ACTIONS.GET_FAILURE, payload: error }),
}
