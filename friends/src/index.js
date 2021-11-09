import React from 'react'
import { render } from 'react-dom'

import App from './App'
import './reset.css'

import ContextProviders from './contexts/ContextProviders'

render(
  <ContextProviders>
    <App />
  </ContextProviders>,
  document.getElementById('root')
)
