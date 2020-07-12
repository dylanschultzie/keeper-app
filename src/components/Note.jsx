import React from "react";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.index);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
