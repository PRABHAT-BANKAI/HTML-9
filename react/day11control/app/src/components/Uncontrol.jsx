import React, { useRef } from "react";

const Uncontrol = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior and stop refreshing the page
    console.log("Input value:", inputRef.current.value);
 
  
    alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} defaultValue="Guest" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrol;
