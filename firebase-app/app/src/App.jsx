import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config/firebase";
import Home from "./components/home";
const App = () => {
  const [data, setData] = useState();
  async function handleLogin() {
    let response = await signInWithPopup(auth, provider);
    console.log(response);
    setData(response)
  }
  return (
    <div>
      {data ? <Home /> : <button onClick={handleLogin}>Google login</button>}
    </div>
  );
};

export default App;
