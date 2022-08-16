import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    dkeeper.createNote(newNote.title, newNote.content);
    setNotes(prevNotes => {
      return [newNote, ...prevNotes];
    });
  }

  // triggered each time this component is re-rendered
  useEffect(() => {
    console.log("useEffect is triggered");
    fetchData();
  }, []); // if we add this second argument to useEffect ([]), then it ensures
  // that useEffect is triggered only once, and that it does not run into an
  // infinite loop (which would normally happen since the state is being updated
  // in fetchData, which causes the component to be re-rendered)

  async function fetchData() {
    const notesArray = await dkeeper.readNotes();
    setNotes(notesArray); // this will trigger a re-render since the state is being updated
  }

  function deleteNote(id) {
    dkeeper.removeNote(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
