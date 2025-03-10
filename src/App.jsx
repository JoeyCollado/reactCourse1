import { useState, useEffect } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = `React Tutorial  ${counter}`
  }, []); //call this callback function everytime the useState is updated by default with no dependencies array

//empty dependency = callback func only going to be invoke one time only even when we update the state of component
//this is useful when we for example want to fetch our user in api and we want to render it to our document and you dont want to refetch the user every single time

//without dependency = it's going to be invoke every time your component state is updated

//with dependency

  return (
    <div>
      <div>You Clicked the button {counter} times</div>
      <button onClick={() => setCounter((count) => count + 1)}>Click Me</button>
    </div>
  )
}

export default App
