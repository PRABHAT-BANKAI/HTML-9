import React from "react";
import { useNavigate, useParams } from "react-router";

const Read = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  function handleBack() {
    navigate("/");
  }

  return (
    <div>
      <h2>TItle:</h2>
      <h3>Price:</h3>
      <h4>Category</h4>
      <button onClick={handleBack}>back</button>
    </div>
  );
};

export default Read;
