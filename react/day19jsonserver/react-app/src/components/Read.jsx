import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Read = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  console.log(productId);

  async function fetchData() {
    let response = await axios.get(
      "http://localhost:3000/product/" + productId
    );
    console.log(response);
    setProduct(response.data);
  }
  function handleBack() {
    navigate("/");
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Single Page</h1>
      <p>Title:{product.productName}</p>
      <p>Price:{product.price}</p>
      <p>Category:{product.category}</p>
      <button onClick={handleBack}>Back to home</button>
    </div>
  );
};

export default Read;
