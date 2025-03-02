import { useState } from "react"

const RegisterForm = () => {
//use state returns an array that returns two value = first state and function or dispatch function (which is used to update state variable)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayname, setDisplayName] = useState("")
  return (
    <form className="text-white flex justify-end gap-5">
        <div>
            <label htmlFor="username">Username</label>
            <input id="username" value={username} onChange={(e) => {
                setUsername(e.target.value)
            }}/>
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input id="password" value={password} onChange={}/>
        </div>

        <div>
            <label htmlFor="displayname">Display Name</label>
            <input id="displayname" value={displayname} />
        </div>

        <div className="mr-40 justify-start">
            <span>Username: {username}</span>
        </div>
    </form>
  )
}

export default RegisterForm
