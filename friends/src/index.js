import React from 'react'
import { render } from 'react-dom'

import App from './App'
import './reset.css'

import AppContextProvider from './contexts/AppContext'

render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root')
)
