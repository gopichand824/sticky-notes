import { useEffect, useRef } from "react";
import Styles from "./Contextmenu.module.css";
const Contextmenu = ({ addNotes }) => {
  const contextMenuRef = useRef(null);

  // useEffect(() => {
  //   const contextMenu = contextMenuRef.current;
  //   if (!contextMenu) return;
  // })
  useEffect(() => {
    const contextMenu = contextMenuRef.current;

    window.addEventListener("contextmenu", (event) => {
      event.preventDefault(); // Prevent the default browser context menu
  
      const x = event.pageX;
      const y = event.pageY;
  
      contextMenu.style.left = `${x}px`;
      contextMenu.style.top = `${y}px`;
      contextMenu.style.display = "block"; // Show the menu
    });
  
    // Close context menu when clicking anywhere else
    window.addEventListener("click", () => {
      contextMenu.style.display = "none"; // Hide the menu
    });
  }, []);

  return (
    <div className="contextmenu">
      <ul ref={contextMenuRef} id="contextMenu" className={Styles.context_menu}>
        <li
          onClick={(e) => {
            addNotes({ x: e.clientX, y: e.clientY });
          }}
        >
          Add Note
        </li>
      </ul>
    </div>
  );
};

export default Contextmenu;

// const preventDefaultContextmenu = () => {
//   const contextMenu = contextMenuRef.current;

//   window.addEventListener("contextmenu", (event) => {
//     event.preventDefault(); // Prevent the default browser context menu

//     const x = event.pageX;
//     const y = event.pageY;

//     contextMenu.style.left = `${x}px`;
//     contextMenu.style.top = `${y}px`;
//     contextMenu.style.display = "block"; // Show the menu
//   });

//   // Close context menu when clicking anywhere else
//   window.addEventListener("click", () => {
//     contextMenu.style.display = "none"; // Hide the menu
//   });
// };
