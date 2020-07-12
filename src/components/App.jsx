import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function handleAdd(newNote) {
    setNotes(() => {
      return [...notes, newNote];
    });
  }

  function handleDelete(deleteIndex) {
    setNotes(() => {
      return notes.filter((value, index) => {
        return index !== deleteIndex;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {notes.map((note, index) => {
        return <Note key={index} index={index} title={note.title} content={note.content} onDelete={handleDelete} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
