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

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {notes.map((note, index) => {
        return <Note key={index} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
