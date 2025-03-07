import { useState } from "react";
import { UserDetails } from "./components/userDetails";

export default function App() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [counter, setCounter] = useState(3);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "joey",
      email: "akosijoey@gmail.com",
    },
    {
      id: 2,
      username: "joey2",
      email: "akosijoey2@gmail.com",
    },
    {
      id: 3,
      username: "joey3",
      email: "akosijoey3@gmail.com",
    },
  ]);
  return (
    <div className="bg-slate-600 h-screen">
      <form onSubmit={e => {
        e.preventDefault()
        const newUser = {
          id, counter,
          username,
          email,
        };
        setCounter((currentCounter) => currentCounter + 1)
      }}>
      <div>
      <label htmlFor="username">Username</label>
      <input name="username" id="username" value={username} onChange={(e) => {
        setUsername(e.target.value); 
      }}/>
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input name="email" id="email" value={email} onChange={(e) => {
        setEmail(e.target.value);
      }}/>
      </div>
      <button>Add User</button><br/>
      </form>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}
