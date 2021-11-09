import React, { useReducer, createContext } from 'react'
import logger from 'use-reducer-logger'
import { reducer, initialState } from '../lib/reducer'
import { actions } from '../lib/actions'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(logger(reducer), initialState)

  const login = () => dispatch(actions.login())
  const logout = () => dispatch(actions.logout())

  return <AppContext.Provider value={{ user, login, logout }}>{children}</AppContext.Provider>
}

export default AppContextProvider
