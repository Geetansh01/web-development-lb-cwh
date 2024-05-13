import React from "react";
import { useState } from "react";

const Todo = ({ props }) => {
  return (
    <div className="">
      <div className={props.Completed ? "line-through max-w-[300px] break-words" : "max-w-[300px] break-words"}>{props.desc}</div>
    </div>
  );
};

export default Todo;
