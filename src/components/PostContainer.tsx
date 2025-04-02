import React, { useContext, useState } from 'react'
import PostContent from './postContent'
import { UserContext } from '../contexts/UserContext'

const PostContainer = () => {

    const [data,setData] = useState("hello world")
    const userContextData = useContext(UserContext) //consuming context
  return (

    <div>
      <PostContent data={data}/>
    </div>
  )
}

export default PostContainer
