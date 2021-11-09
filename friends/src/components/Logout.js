import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import { useUserContext } from '../hooks/useUserContext'

const Logout = () => {
  const { push } = useHistory()
  const { logout } = useUserContext()

  useEffect(() => {
    axiosWithAuth()
      .post('/logout')
      .then(() => {
        localStorage.removeItem('token')
        logout()
      })
      .catch((err) => console.log(err))
      .finally(() => push('/'))
  })

  return null
}

export default Logout
