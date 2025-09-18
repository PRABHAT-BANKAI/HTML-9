import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { productContext } from "../App";

const Read = () => {
  const { data, setData } = useContext(productContext);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  function handleBack() {
    navigate("/");
  }

  return (
    <div>
      <h2>TItle:{data[id].title}</h2>
      <h3>Price: {data[id].price}</h3>
      <h4>Category {data[id].category}</h4>
      <button onClick={handleBack}>back</button>
    </div>
  );
};

export default Read;
