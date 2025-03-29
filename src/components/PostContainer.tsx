import React, { useState } from 'react'
import PostContent from './postContent'

const PostContainer = () => {

    const [data,setData] = useState("hello world")
  return (

    <div>
      <PostContent data={data}/>
    </div>
  )
}

export default PostContainer
