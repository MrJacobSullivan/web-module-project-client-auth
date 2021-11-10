import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './reset.css'

import AppContextProvider from './contexts/AppContext'

render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>,
  document.getElementById('root')
)
