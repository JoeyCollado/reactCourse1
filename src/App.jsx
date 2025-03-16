import { useState, useEffect } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  //const [sync, setSync] = useState(false)
  //promises = have states, pending, fulfilled, and rejected states, important in fetching api's

  useEffect(() => {
    document.title = `React Tutorial  ${counter}`
  }, [counter]); //call this callback function everytime the useState is updated by default with no dependencies array

  useEffect(() => { //fetch data (url, {options for requested data})

    const controller = new AbortController();
    controller.signal //give abort signal property, give information about aborted request

    async function fetchUsers(){
      try{
       const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { signal: controller.signal } //communicate with the request if it's to be aborted or not
      ) //await can be used to any method call that returns a promise, what it does is basically it says "Wait for this promise to resolve or reject then proceed with the rest of the logic"
        const json = await response.json() //use response.json to get the actual data
        console.log(json)
      } catch (error){
        console.log(error)
      }
    }
    fetchUsers();
    //cleanup function is called first time because we are unmounting the components then the component is rendered second time and the cleanup function will not be called 2nd time
    return () => {
       controller.abort();
    }
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

//abort controller = allows us to control the request so you can have it to be aborted (cancel the request if it needs to be)