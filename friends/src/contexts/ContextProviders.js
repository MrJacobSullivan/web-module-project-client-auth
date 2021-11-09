import React from 'react'

import UserContextProvider from './UserContext'

const ContextProviders = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>
}

export default ContextProviders
