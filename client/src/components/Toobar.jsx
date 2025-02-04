import React from "react";
import Styles from "./Toolbar.module.css";
const Toolbar = ({ addNotes }) => {
  return (
    <div className={Styles.container}>
      {/* toolbar items */}
      <div
        className={Styles.items}
        onClick={(e) => {
          addNotes({ x: e.clientX + 100, y: e.clientY - 100 });
        }}
      >
        Add Note
      </div>
    </div>
  );
};

export default Toolbar;
