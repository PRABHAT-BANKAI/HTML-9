import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Update = () => {
  const [inputText, setInputText] = useState({
    productName: "",
    category: "",
    price: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchData() {
    let response = await axios.get("http://localhost:3000/product/" + id);

    setInputText(response.data);
  }
  console.log(inputText);

  async function handleUpdate(e) {
    e.preventDefault();
    let response = await axios.put("http://localhost:3000/product/" + id,inputText);
    console.log(response);
    alert("updated successfully");
    navigate("/");
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Udpate Page</h1>
      <form onSubmit={handleUpdate} action="">
        <table border={""}>
          <tr>
            <td>Product Name:</td>
            <td>
              <input
                type="text"
                value={inputText.productName}
                onChange={(e) => {
                  setInputText({ ...inputText, productName: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>category:</td>
            <td>
              <input
                type="text"
                value={inputText.category}
                onChange={(e) => {
                  setInputText({ ...inputText, category: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>
              <input
                type="text"
                value={inputText.price}
                onChange={(e) => {
                  setInputText({ ...inputText, price: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button>Submit</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Update;
