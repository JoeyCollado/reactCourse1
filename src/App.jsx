import PostContainer from "./components/postContainer"
import UserContext from "./contexts/UserContext"

const App = () => {
  return (
    <div>
      <UserContext.Provider>
        <div>
      <PostContainer/>
       </div>
      </UserContext.Provider>
    </div>
  )
}

export default App

//