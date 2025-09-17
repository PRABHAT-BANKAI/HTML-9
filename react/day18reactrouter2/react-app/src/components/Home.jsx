import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("productData")) || []
  );
  const [inputsText, setInputsText] = useState({
    title: "",
    price: "",
    category: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputsText.title || !inputsText.price || !inputsText.category) {
      alert("you have to fill all fields");
      return;
    }

    setData([...data, inputsText]);

    setInputsText({
      title: "",
      price: "",
      category: "",
    });
  }

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <h2>Add Product details</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title :</label>
          <input
            type="text"
            placeholder="enter your title"
            value={inputsText.title}
            onChange={(e) => {
              setInputsText({ ...inputsText, title: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Price :</label>
          <input
            type="text"
            placeholder="enter your price"
            value={inputsText.price}
            onChange={(e) => {
              setInputsText({ ...inputsText, price: e.target.value });
            }}
          />
        </div>
        <label htmlFor="">category :</label>
        <input
          type="text"
          placeholder="enter your cotegory"
          value={inputsText.category}
          onChange={(e) => {
            setInputsText({ ...inputsText, category: e.target.value });
          }}
        />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <br />
      <table border={""}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elements, index) => {
            return (
              <tr key={index}>
                <td>{elements.title}</td>
                <td>{elements.price}</td>
                <td>{elements.category}</td>
                <td>
                  <Link to={"/read/" + index}>
                    <button>read</button>
                  </Link>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
