import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState([]);

  function handleAdd() {
    if (!inputText.trim()) {
      alert("first you have to feild task");
      return;
    }

    setTodolist([inputText, ...todolist]);

    setInputText("");
  }

  console.log(todolist);
  return (
    <div>
      <h1>Todo list</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>

      <div>
        {todolist.map((todo, index) => {
          return (
            <div key={index}>
              <p>{todo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
