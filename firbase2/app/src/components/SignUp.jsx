import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router";
import { auth } from "../config/firebase";
const SignUp = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const navigate = useNavigate();


  
  function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userData.email, userData.password) // return promise // promise return 3 states pending, fulfilled, rejected
      .then((res) => {
        console.log(res);
        alert("signup successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    setUserData({ email: "", password: "" });
  }

  return (
    <div>
      <h1> Signup page </h1>
      <form action="" onSubmit={register}>
        <input
          type="text"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Enter your email "
        />
        <input
          type="text"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          placeholder="Enter your password"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignUp;