import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import Logout from './components/Logout'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <div>
      <header>
        <Link to='/'>
          <h2>Client Auth Project</h2>
        </Link>

        <Link to='/login'>
          <span>Login</span>
        </Link>

        <Link to='/logout'>
          <span>Logout</span>
        </Link>

        <Link to='/friends'>
          <span>Friends</span>
        </Link>
      </header>

      <Switch>
        <Route exact path='/friends' component={FriendsList} />
        <Route path='/logout' component={Logout} />
        <Route path='/login' component={Login} />
        <Route
          path='/'
          component={() => {
            return <div>Home</div>
          }}
        />
      </Switch>
    </div>
  )
}

export default App
