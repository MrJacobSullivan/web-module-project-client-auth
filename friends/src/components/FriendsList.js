import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
// import { useAppContext } from '../hooks/useAppContext'

import Friend from './Friend'

function FriendsList() {
  // const { friends, getFriends } = useAppContext()
  const [friends, setFriends] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    // getFriends.start()

    axiosWithAuth()
      .get('/friends')
      .then((res) => {
        // getFriends.success(res.data)
        console.log(res.data)
        setFriends(res.data)
      })
      .catch((err) => {
        // getFriends.failure(err)
        setError(err)
      })
  }, [])

  if (!friends) return <div>Loading...</div>

  if (error) return <div>{error}</div>

  return (
    <div>
      {friends.map((friend) => (
        <Friend key={friend.id} id={friend.id} />
      ))}
    </div>
  )
}

export default FriendsList
