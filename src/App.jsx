import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = "React Tutorial"
  });

  return (
    <div>
      <div>You Clicked the button {counter} times</div>
      <button onClick={() => setCounter((count) => count + 1)}>Click Me</button>
    </div>
  )
}

export default App
