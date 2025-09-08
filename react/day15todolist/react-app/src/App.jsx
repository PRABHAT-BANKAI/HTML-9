import React, { useEffect, useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [boolean, setBoolean] = useState(false);

  function handleAdd() {
    if (!inputText.trim()) {
      alert("first you have to feild task");
      return;
    }
    // setTodolist(todolist.push(inputText)); wrong way to update in array

    setTodolist([inputText, ...todolist]); // always using spread operator in react

    setInputText("");
  }

  function handleDelete(index) {
    ///3
    let filterData = todolist.filter((element, i) => i != index); //3!=0//3!=1//3!=2//3!=3// return new array with updated

    setTodolist(filterData);
  }

  function handleEdit(index) {
    setBoolean(true);
    setInputText(todolist[index]);
    setEditIndex(index);
  }

  function handleUpdate() {
    let updatedData = todolist.map((element, i) =>
      i == editIndex ? inputText : element
    );
    setTodolist(updatedData);
    setInputText("");
    setBoolean(false);
  }

  //  todolist[1] = nodejs

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);
  return (
    <div>
      <h1>Todo list</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {boolean ? (
        <button onClick={handleUpdate}>update</button>
      ) : (
        <button onClick={handleAdd}>Add Task</button>
      )}

      <div>
        {todolist.map((todo, index) => {
          return (
            <div key={index}>
              <p>{todo}</p>
              <button
                onClick={() => {
                  handleEdit(index);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("todoData");
          // window.location.reload(); make performance application down 
          setTodolist([])
        }}
      >
        Clear local storage
      </button>
    </div>
  );
};

export default App;
