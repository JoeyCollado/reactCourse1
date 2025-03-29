import React from 'react'

const PostButton = ({data}) => {
  return (
    <>
    <button className='bg-black text-white px-4 py-1 rounded-md'>Button</button>
    <div>{data}</div>
    </>
  )
}

export default PostButton
