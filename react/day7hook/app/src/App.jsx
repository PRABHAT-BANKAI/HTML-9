import React, { useEffect, useState } from "react";
import Product from "./components/Product";

const App = () => {
  // hook
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  async function getData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const productdata = await response.json();
    setData(productdata);
  }

  //   The useEffect hook in React is designed to handle side effects in functional components. Side effects are operations that interact with the "outside world" beyond the component's rendering logic, such as:
  // Fetching data: Making API calls to retrieve data from a server.
  // Setting up subscriptions: Subscribing to external data sources or event listeners.
  // Directly manipulating the DOM: Although React generally handles DOM

  useEffect(() => {
    console.log("useffect");
    getData();
  }, [count]);

  // useeffect have three dependency
  // 1. call infinite time during render with api
  // 2. [] empty array  help to call useeffect only one time after one time render the page
  // 3. [value ] when value will change then useffect will call

  return (
    // react fragment
    <>
      <h1>Product Page</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>
      {data.map((item, index) => {
        return <Product item={item} key={index} />;
      })}
    </>
  );
};

export default App;
