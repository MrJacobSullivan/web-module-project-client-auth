import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialState = { username: '', password: '' }

const Login = () => {
  const { push } = useHistory()

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

    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        push('/friends')
      })
      .catch((err) => {
        console.log(err)
      })
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
