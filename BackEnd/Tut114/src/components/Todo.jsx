import React from "react";
import { useState } from "react";

const Todo = ({ props }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className={props.Completed ? "line-through" : ""}>{props.desc}</div>
      <div className="space-x-2">
        <button className="myBtn">Edit</button>
        <button className="myBtn">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
