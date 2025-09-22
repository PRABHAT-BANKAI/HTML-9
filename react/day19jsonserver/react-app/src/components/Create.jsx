import axios from "axios";
import React, { useEffect, useState } from "react";

const Create = () => {
  const [inputText, setInputText] = useState({
    productName: "",
    category: "",
    price: "",
  });
  const [data, setData] = useState([]);

  async function handleAdd(e) {
    e.preventDefault();
    if (
      !inputText.productName.trim() ||
      !inputText.category.trim() ||
      !inputText.price.trim()
    ) {
      alert("fill out all feilds");
      return;
    }

    let response = await axios.post("http://localhost:3000/product", inputText);
    alert("added data successfully");
    console.log(response.data);
    fetchData();
    setInputText({
      productName: "",
      category: "",
      price: "",
    });
  }

  async function fetchData() {
    let response = await axios.get("http://localhost:3000/product");
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <form onSubmit={handleAdd} action="">
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

      <table border={""}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Prize</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.productName}</td>
                <td>{element.category}</td>
                <td>{element.price}</td>
                <td>
                  {" "}
                  <button>Edit</button> <button>Read</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Create;
