import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Create = () => {
  const [inputText, setInputText] = useState({
    productName: "",
    category: "",
    price: "",
  });
  const [data, setData] = useState([]);

  const [show, setShow] = useState(data);

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
  async function handleDelete(id) {
    let response = await axios.delete("http://localhost:3000/product/" + id);
    alert("delete successfully");
    fetchData();
  }
  function handleAsc() {
    console.log("hello");
    let sortData = data.sort((a, b) => a.price - b.price);
    setData([...sortData]);
  }

  function handleDsc() {
    console.log("hello");
    let sortData = data.sort((a, b) => b.price - a.price);
    setData([...sortData]);
  }

  function handleChange(e) {
    let filterData = data.filter(
      (element) => element.category === e.target.value
    );
    setData(filterData);
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

      <button onClick={handleAsc}>Asc</button>
      <button onClick={handleDsc}>Dsc</button>

      <div>
        <select onChange={handleChange} name="" id="">
          <option value="shoes">Shoes</option>
          <option value="clothes">Clothes</option>
          <option value="shirt">shirt</option>
        </select>
      </div>

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
                  <Link to={"/edit/" + element.id}>
                    <button>Edit</button>
                  </Link>
                  <Link to={"/read/" + element.id}>
                    <button>Read</button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(element.id);
                    }}
                  >
                    Delete
                  </button>
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
