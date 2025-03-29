import React from 'react'
import PostButton from './postButton'

const PostContent = ({data}) => {
  return (
    <div>
      <h1>Content</h1>
      <PostButton data={data}/>
    </div>
  )
}

export default PostContent
