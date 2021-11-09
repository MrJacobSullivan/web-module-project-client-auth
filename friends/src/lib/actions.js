export const ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

export const actions = {
  login: () => ({ type: ACTIONS.LOGIN }),
  logout: () => ({ type: ACTIONS.LOGOUT }),
}
