import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(initiateTodos);
  const [showFinishedToo, setshowFinishedToo] = useState(true);

  function initiateTodos() {
    if (localStorage.getItem("todos") != null) {
      let todosFromLS = JSON.parse(`${localStorage.getItem("todos")}`);
      return todosFromLS;
    }
    return [{ id: uuidv4(), desc: "Sample ToDo", Completed: false }];
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), desc: value, Completed: false }]);
    console.log(todos);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChkBox = (e) => {
    let targettodoID = e.target.dataset.todoid;
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

  const handleDelete = (todoid, confirm = false) => {
    if (confirm || window.confirm("Delete for sure?")) {
      let targetToDoIndex = todos.findIndex((todo) => {
        return todo.id == todoid;
      });
      let newTodos = [...todos];
      newTodos.splice(targetToDoIndex, 1);
      setTodos(newTodos);
    }
  };

  const handleEdit = (todoid) => {
    let targetToDoIndex = todos.findIndex((todo) => {
      return todo.id == todoid;
    });
    setValue(todos[targetToDoIndex].desc);
    handleDelete(todoid, true);
  };

  function disableBtn() {
    if (value == "") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Navbar />
      <div className="wrapper lg:w-[40vw] min-h-[120vh] mx-auto bg-violet-100 rounded-md mt-3 flex flex-col items-center gap-6 py-2 px-5">
        <h1 className="text-2xl">All Your Todos</h1>
        <div className="w-full">Add a ToDo</div>

        <div className="addTodo w-full flex justify-between">
          <input
            type="text"
            className="w-3/4 rounded-lg pl-2"
            value={value}
            onChange={handleChange}
          />
          <button
            disabled={disableBtn()}
            onClick={handleAdd}
            className="add w-[100px] h-[30px] myBtn disabled:bg-gray-500"
          >
            Save
          </button>
        </div>
        <div className="w-full flex items-center gap-8 h-11 border-black border-b">
          <input
            type="checkbox"
            checked={showFinishedToo}
            onChange={() => {
              setshowFinishedToo(!showFinishedToo);
            }}
            className="w-6 h-6"
          />
          <span>Show Finished ToDos</span>
        </div>

        <div className="font-bold text-2xl w-full">Your Todos</div>
        {todos.map((todo) => {
          return (
            (showFinishedToo || !todo.Completed) && (
              <div className="w-full flex gap-2 justify-between" key={todo.id}>
                <div className="flex gap-8">
                  <input
                    className="w-6 h-6"
                    type="checkbox"
                    name="Completed"
                    data-todoid={todo.id}
                    onChange={handleChkBox}
                    checked={todo.Completed}
                  />
                  <Todo props={todo} />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      handleEdit(todo.id);
                    }}
                    className="myBtn w-[30px] h-[30px]"
                  >
                    <MdModeEdit />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                    className="myBtn w-[30px] h-[30px]"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default App;
