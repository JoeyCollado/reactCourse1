import { useState } from "react"
import { UserDetails } from "./components/userDetails"

export default function App(){

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "joey",
      email: "akosijoey@gmail.com"
    },
    {
      id: 2,
      username: "joey2",
      email: "akosijoey2@gmail.com"
    },
    {
      id: 3,
      username: "joey3",
      email: "akosijoey3@gmail.com"
    },
  ])
  return (
  <div className="bg-slate-600 h-screen"> 
    {users.map((user) => (
      <UserDetails key={user.id} user={user} setUsers={setUsers}/>
      ))}
  </div>
  )
}
//key is always needed when we want to render a list of objects
//define state with an array
