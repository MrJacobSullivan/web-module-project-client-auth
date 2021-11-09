import React, { useReducer, createContext } from 'react'
import logger from 'use-reducer-logger'
import { reducer, initialState } from '../lib/reducers/userReducer'
import { actions } from '../lib/actions/userActions'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(logger(reducer), initialState)

  const login = (username) => dispatch(actions.login(username))
  const logout = () => dispatch(actions.logout())

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>
}

export default UserContextProvider
