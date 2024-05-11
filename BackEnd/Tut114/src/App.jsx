import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([
    { id: uuidv4(), desc: "Learn React", Completed: false },
  ]);

  const handleAdd = () => {
    if (value != "") {
      setTodos([...todos, { id: uuidv4(), desc: value, Completed: false }]);
      console.log(todos);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChkBox = (e) => {
    let targettodoID = e.target.value;
    console.log(targettodoID);
    let targetToDoIndex = todos.findIndex((todo) => {
      return todo.id == targettodoID;
    });
    let targetTodo = todos[targetToDoIndex];

    let newTodos = [...todos];

    //Flip "todos.Completed"
    newTodos[targetToDoIndex].Completed = !newTodos[targetToDoIndex].Completed;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="wrapper w-[40vw] min-h-[80vh] mx-auto bg-violet-100 rounded-md mt-3 flex flex-col items-center gap-6 py-2 px-5">
        <h1 className="text-2xl">All Your Todos</h1>
        <div className="w-full">Add a ToDo</div>

        <div className="addTodo w-full space-x-4 h-20 border-black border-b">
          <input
            type="text"
            className="w-3/4 rounded-lg pl-2"
            onChange={handleChange}
          />
          <button onClick={handleAdd} className="add w-[100px] h-[30px] myBtn">
            Add
          </button>
        </div>

        <div className="font-bold text-2xl w-full">Your Todos</div>
          {todos.map((todo) => {
            return (
              <div className="w-full flex gap-2" key={todo.id}>
                <input
                  className="w-6"
                  type="checkbox"
                  name="Completed"
                  value={todo.id}
                  onChange={handleChkBox}
                  checked={todo.Completed}
                />
                <Todo props={todo} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
