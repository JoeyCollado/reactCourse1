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

        <button className="bg-slate-200 px-2" onClick={() => {
          setUsers((currentUsersState) => currentUsersState.filter(
            (currentUser) =>  currentUser.id !== user.id         //filter functions = filter elements you don't want, creates a new filtered array which is immutable
          ))
        }}>Delete</button>

        {isEdit && (
  <button
    className="bg-slate-200 px-2"
    onClick={() => {
      setUsers((currentUsersState) =>
        currentUsersState.map((currentUser) =>
          currentUser.id === user.id
            ? { ...currentUser, username, email }
            : currentUser
        )
      );
      setIsEdit(false);
    }}
  >
    Save
  </button>
)}
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
