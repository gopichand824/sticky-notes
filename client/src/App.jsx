import "./App.css";
import Background from "./components/Background";
import Toolbar from "./components/Toobar";
import Contextmenu from "./components/Contextmenu";
import Note from "./components/Note";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const dummyNotes = [
    {
      title: "Title",
      body: "your notes...",
      position: { x: 500, y: 500 },
    },
  ];

  useEffect(() => {
    if (!localStorage.getItem("myNotes")) {
      localStorage.setItem("myNotes", JSON.stringify(dummyNotes));
    }

    const myNotes = JSON.parse(localStorage.getItem("myNotes")); //load data from localstorage
    setNotes(myNotes);
  }, []);

  //Save notes to local storage
  const saveNotes = (myNotes) => {
    localStorage.setItem("myNotes", JSON.stringify(myNotes));
  };

  //Add new notes
  const handleAddNotes = ({ x, y }) => {
    const newNote = {
      title: "Title",
      body: "your notes...",
      position: { x: x || 500, y: y || 500 },
    };
    setNotes([...notes, newNote]);
    saveNotes([...notes, newNote]);
  };

  //delete a note
  const handleDeleteNotes = (note) => {
    let newNotes = [];
    newNotes = notes.filter((noteI) => {
      return !(
        note.position.x === noteI.position.x &&
        note.position.y === noteI.position.y
      );
    });

    setNotes(newNotes);
    saveNotes(newNotes);
  };

  //save the notes when its title change
  const handleTitleChange = (event, index) => {
    const newTitle = event.target.innerText.trim();
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = { ...updatedNotes[index], title: newTitle };
      saveNotes(updatedNotes);
      return updatedNotes;
    });
  };

  //save the note when the its content change
  const handleContentChange = (event, index) => {
    const update = event.target.innerText.trim();
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = { ...updatedNotes[index], body: update };
      saveNotes(updatedNotes);
      return updatedNotes;
    });
    
  };

  return (
    <>
    <Header />
      <Toolbar addNotes={handleAddNotes} />
      <Contextmenu addNotes={handleAddNotes} />
      {notes &&
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            index={index}
            setNotes={setNotes}
            notes={notes}
            deleteNotes={handleDeleteNotes}
            saveNotes={saveNotes}
            handleTitleChange={handleTitleChange}
            handleContentChange={handleContentChange}
          />
        ))}
      <Background />
    </>
  );
}

export default App;
