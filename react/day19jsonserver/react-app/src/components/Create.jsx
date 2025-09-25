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
  const [show, setShow] = useState([]);
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [pageNumber, setPageNumber] = useState("");

  function handleSearch() {
    let searchData = show.filter((element) =>
      element.productName.trim().includes(search.trim())
    );
    setShow(searchData);

    setSearch("");
  }

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
    let response = await axios.get(
      `http://localhost:3000/product?_page=${pageCount}&_per_page=2`
    );
    // console.log(response)
    setPageNumber(response.data.pages);
    setData(response.data.data);
    setShow(response.data.data);
  }
  async function handleDelete(id) {
    let response = await axios.delete("http://localhost:3000/product/" + id);
    alert("delete successfully");
    fetchData();
  }
  function handleAsc() {
    console.log("hello");
    let sortData = data.sort((a, b) => a.price - b.price);
    setShow([...sortData]);
  }

  function handleDsc() {
    console.log("hello");
    let sortData = data.sort((a, b) => b.price - a.price);
    setShow([...sortData]);
  }

  function handleChange(e) {
    if (e.target.value == "all") {
      setShow(data);
      return;
    }

    let filterData = data.filter(
      (element) => element.category === e.target.value
    );
    setShow(filterData);
  }

  useEffect(() => {
    fetchData();
  }, [pageCount]);
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
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="searching "
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button onClick={handleAsc}>Asc</button>
      <button onClick={handleDsc}>Dsc</button>

      <div>
        <select onChange={handleChange} name="" id="">
          <option value="shoes">Shoes</option>
          <option value="clothes">Clothes</option>
          <option value="shirt">shirt</option>
          <option value="all">all</option>
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
          {show.map((element) => {
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

      <div>
        <button
          disabled={pageCount == 1}
          onClick={() => {
            setPageCount(pageCount - 1);
          }}
        >
          prev
        </button>
        <p>{pageCount}</p>
        <button
          disabled={pageCount == pageNumber}
          onClick={() => {
            setPageCount(pageCount + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Create;
