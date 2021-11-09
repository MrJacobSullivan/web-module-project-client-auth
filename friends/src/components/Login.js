import React, { useState } from 'react'

const initialState = { username: '', password: '' }

const Login = () => {
  const [credentials, setCredentials] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleLogin = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input
            type='text'
            name='username'
            placeholder='required'
            value={credentials.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type='password'
            name='password'
            placeholder='required'
            value={credentials.password}
            onChange={handleChange}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
