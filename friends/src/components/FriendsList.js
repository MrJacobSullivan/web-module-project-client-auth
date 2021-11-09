import React, { useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsList = () => {
  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return <div>Friends List</div>
}

export default FriendsList
