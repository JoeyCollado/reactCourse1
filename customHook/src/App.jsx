import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("name", "")
  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
    </div>
  )
}

export default App
