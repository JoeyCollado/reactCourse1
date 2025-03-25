import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log("Window/Viewport Resized!");
    };
    window.addEventListener("resize", resizeEventHandler);

    //avoid registering same event multiple times (cleanup function), called everytime component unmounts
    return () => {
      window.removeEventListener('resize', resizeEventHandler)
    }
  }, []); //empty dependency = make sure this useEffect execute only 1 time

  



  return <div></div>;
};

export default App;
