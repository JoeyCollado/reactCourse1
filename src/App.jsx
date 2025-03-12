import { useState, useEffect } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  //const [sync, setSync] = useState(false)
  //promises = have states, pending, fulfilled, and rejected states, important in fetching api's

  useEffect(() => {
    document.title = `React Tutorial  ${counter}`
  }, [counter]); //call this callback function everytime the useState is updated by default with no dependencies array

  useEffect(() => { //fetch data (url, {options for requested data})
    
  })

  return (
    <div>
      <div>You Clicked the button {counter} times</div>
      <button onClick={() => setCounter((count) => count + 1)}>Click Me</button>
      <button onClick={() => setSync((current) => !current)}>Sync</button>
    </div>
  )
}

export default App
