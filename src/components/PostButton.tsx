import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const PostButton = ({data}) => {

  const user = useContext(UserContext); //consume
  return (
    <>
    <button className='bg-black text-white px-4 py-1 rounded-md'>Button</button>
    <div>{user.id}</div>
    </>
  )
}

export default PostButton
