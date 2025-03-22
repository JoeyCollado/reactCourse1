import React, { useState } from 'react'

const App = () => {

  const [post, setPost] = useState({
    //state object
    title : "",
    body : "",
    });  

  return (

   <div>
    <form>
      <div>
      <label htmlFor='title'>Title</label>
      <input type='text' id="title" value={post.title} onChange={(e) => {
        setPost((currentPostData) => ({...currentPostData, title: e.target.value,})) //update title field
      }}/>
      </div>
 
      <div>
      <label htmlFor='body'>Body</label>
      <input type='text' id="body" value={post.body} onChange={(e) => {
        setPost((currentPostData) => ({...currentPostData, body: e.target.value,})) //update body field
      }}/>
      </div>
    </form>
   </div>
       
  )
}

export default App

//post request = type of request that we make whenever we want to create some kind of record or resourse on server side

