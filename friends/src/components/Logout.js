import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

// import { useAppContext } from '../hooks/useAppContext'

const Logout = () => {
  const { push } = useHistory()
  // const { user } = useAppContext()

  useEffect(() => {
    axiosWithAuth()
      .post('/logout')
      .then(() => {
        // user.logout()
        localStorage.removeItem('token')
      })
      .catch((err) => console.log(err))
      .finally(() => {
        push('/')
      })
  }, [push])

  return null
}

export default Logout
