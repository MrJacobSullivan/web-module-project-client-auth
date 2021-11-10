import React, { useReducer, createContext } from 'react'
import logger from 'use-reducer-logger'
import { reducer, initialState } from '../lib/reducer'
import { actions } from '../lib/actions'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initialState)

  const user = {
    login: () => dispatch(actions.login()),
    logout: () => dispatch(actions.logout()),
  }

  const getFriends = {
    start: () => dispatch(actions.getStart()),
    success: (friends) => dispatch(actions.getSuccess(friends)),
    failure: (error) => dispatch(actions.getFailure(error)),
  }

  return (
    <AppContext.Provider value={{ ...state, getFriends, user }}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider
