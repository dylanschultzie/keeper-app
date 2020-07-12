import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    props.onAdd(note);
    setNote((prevNote) => {
      return {
        title: "",
        content: "",
      };
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />}
        <textarea
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
        />
        <Zoom in={expanded}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
