import React from "react";

const Note = (props) => {
  return (
    <div className="card noteContainer col-4">
      <div className="card-body">
        <h5 className="card-title">{props.note.title}</h5>
        <p className="card-text">{props.note.description}</p>
      </div>
    </div>
  );
};

export default Note;
