import { useState } from "react";
import PostContainer from "./components/postContainer"
import { UserContext } from "./contexts/UserContext";

const App = () => {

  const [userData, setUserData] = useState({
    id: 1,
    username: "joey",
    email: "12gmaail.com",
    displayName: "aha",
  });

  return (
    <div>
      <UserContext.Provider 
        value={{...userData, setUserData}}>
        <div>
      <PostContainer/>
       </div>
      </UserContext.Provider>
    </div>
  )
}

export default App;

//