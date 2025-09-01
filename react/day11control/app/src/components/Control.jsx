import React, { useState } from "react";

const Control = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setUserData({ email, password });

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h1>Control component</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="">
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <br />
        <button>Submit</button>

        <p>email:{userData.email}</p>
        <p>password:{userData.password}</p>
      </form>
    </div>
  );
};

export default Control;
