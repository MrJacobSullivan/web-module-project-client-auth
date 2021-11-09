import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Logout = () => {
  const { push } = useHistory()

  useEffect(() => {
    axiosWithAuth()
      .post('/logout')
      .then(() => {
        localStorage.removeItem('token')
      })
      .catch((err) => console.log(err))
      .finally(() => push('/'))
  })

  return null
}

export default Logout
