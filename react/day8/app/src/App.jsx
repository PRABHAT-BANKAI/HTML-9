import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [dark, setDark] = useState(false);

  async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();

    setData(result);
  }

  // life cycle component
  // mount
  // update
  // unmount

  //   | Lifecycle Phase         | Class Component        | Function Component (Hooks)                 |
  // | ----------------------- | ---------------------- | ------------------------------------------ |
  // | Mount (initial render)  | `componentDidMount`    | `useEffect(() => {}, [])`                  |
  // | Update (on props/state) | `componentDidUpdate`   | `useEffect(() => {}, [deps])`              |
  // | Unmount                 | `componentWillUnmount` | `useEffect(() => { return () => {} }, [])` |

  useEffect(() => {
    getData();
    console.log("after Rendering ");
    return () => {
      console.log("unmount and cleanup function ");
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h1>Product Data</h1>
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        Dark Mode
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((element, index) => {
          return (
            <Card
              key={element.id}
              title={element.title}
              image={element.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
