import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const sum = useMemo(() => {
    console.log("sum");
    return Number(inputOne) + Number(inputTwo);
  }, [inputOne, inputTwo]);
  console.log("rendering..");

  // The useMemo hook in React is a tool for optimizing performance by memoizing (caching) the result of an expensive computation. This means that if the dependencies of the computation haven't changed, useMemo will return the previously calculated value instead of re-executing the function.

  return (
    <div>
      <table border={""}>
        <tbody>
          <tr>
            <td>Value 1:</td>
            <td>
              <input
                type="text"
                value={inputOne}
                onChange={(e) => setInputOne(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Value 2 :</td>
            <td>
              <input
                type="text"
                value={inputTwo}
                onChange={(e) => setInputTwo(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{sum}</td>
          </tr>
        </tbody>
      </table>

      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>
    </div>
  );
};

export default Memo;
