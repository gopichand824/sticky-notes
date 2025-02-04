import React, { useState, useEffect } from "react";
import Styles from "./Note.module.css";
import { MdDelete } from "react-icons/md";
import { MdEditNote } from "react-icons/md";

const Note = ({
  notes,
  index,
  setNotes,
  deleteNotes,
  saveNotes,
  handleContentChange,
  handleTitleChange,
}) => {

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Effect to handle mouse events when dragging
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const updatedNotes = [...notes];
      updatedNotes[index].position.x = event.clientX - offset.x;
      updatedNotes[index].position.y = event.clientY - offset.y;

      setNotes(updatedNotes);
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset, notes, index]);

  // Handle mouse down event to start dragging
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - notes[index].position.x,
      y: event.clientY - notes[index].position.y,
    });
  };

  return (
    <div
      className={Styles.note}
      onMouseDown={handleMouseDown}
      onMouseUp={() => saveNotes(notes)}
      // onKeyDown={() => console.log("key down detected on ")}
      style={{
        position: "fixed",
        zIndex: 33333,
        left: `${notes[index].position.x}px`,
        top: `${notes[index].position.y}px`,
      }}
    >
      <div className={Styles.header}>
        <h3
          className={Styles.title}
          contentEditable // Makes the h3 editable
          suppressContentEditableWarning={true} // Suppress React warning
          onBlur={(event) => handleTitleChange(event, index)} // Save the title when editing stops
        >
          {notes[index].title}
        </h3>
        <div className={Styles.action}>
          <MdEditNote className={Styles.headerItem} />
          <MdDelete
            onClick={() => deleteNotes(notes[index])}
            className={Styles.headerItem}
          />
        </div>
      </div>
      <p
        className={Styles.noteBody}
        contentEditable // Makes the p editable
        suppressContentEditableWarning={true} // Suppress React warning
        onBlur={(event) => handleContentChange(event, index)} // Save the content when editing stops
      >
        {notes[index].body}
      </p>
    </div>
  );
};

export default Note;