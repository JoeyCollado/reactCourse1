import React, { useContext } from 'react'
import PostButton from './postButton'
import { UserContext } from '../contexts/UserContext'

const PostContent = ({data}) => {

  const {id, setUserData} = useContext(UserContext); //consume
  return (
    <div>
      <h1>Content</h1>
      <PostButton data={data}/>
      {id}
      <button onClick={() => {
        setUserData(() =>)
      }}>CLick Me</button>
    </div>
  )
}

export default PostContent
