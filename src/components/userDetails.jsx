import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
  const [isEdit, setIsEdit] = useState(false); //default not in edit mode
  const [username, setUsername] = useState(user.username); //state variable
  const [email, setEmail] = useState(user.email); //state variable

  return (
    <div>
      <div className="flex gap-5">
        <button
          className="bg-slate-200 px-2"
          onClick={() => {
            setIsEdit((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button className="bg-slate-200 px-2">Delete</button>
        <button className="bg-slate-200 px-2" onClick={() => {
          setUsers(
            (currentUsersState) => {
              return currentUsersState.map(
                (currentUsers) => {
                  if(currentUsers.id === user.id) //ensure we are editing the correct user
                  return ({ ...currentUsers, username: username, email: email }) //ensure that user is editing if not return current user
                  else return currentUsers;
                }
              )
            } 
          )
          setIsEdit(false)
        }}>Save</button>
      </div>
      <div>
        <b>ID:</b>
        <span>{user.id}</span>
        <br />
        <b>Username:</b>
        {/* <span>{user.username}</span> */}
        {isEdit ? (
          <input
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email:</b>
        {/* <span>{user.email}</span> */}
        {isEdit ? <input 
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}/> : <span>{user.email}</span>}
        <br />
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
