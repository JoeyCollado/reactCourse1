import { useState } from "react";
import { LoginForm } from "./components/LoginForm";

const App = () => {

  const [toggle, setToggle] = useState(false)
 
  return (
  <div className="h-screen bg-slate-500">
    <button onClick={() => setToggle((currentState => !currentState))}>
      Toggle
    </button>
    {toggle && <LoginForm/> }
  </div>
)
};

export default App;
