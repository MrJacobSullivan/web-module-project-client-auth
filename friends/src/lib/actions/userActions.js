export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const actions = {
  login: (username) => ({ type: LOGIN, payload: username }),
  logout: () => ({ type: LOGOUT }),
}
