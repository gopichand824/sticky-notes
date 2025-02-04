import React, { useEffect, useRef } from 'react';
import styles from './Background.module.css';

const Background = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) {
//       console.error('Grid container not found!');
//       return;
//     }

//     // State variables for zoom and panning
//     let scale = 1; // Zoom level
//     let offsetX = 0,
//       offsetY = 0; // Grid offset
//     let isDragging = false,
//       startX = 0,
//       startY = 0;

//     // Handle zooming with the mouse wheel
//     const handleWheel = (e) => {
//       e.preventDefault();
//       const scaleAmount = e.deltaY > 0 ? 0.9 : 1.1; // Zoom out or in
//       scale = Math.min(Math.max(scale * scaleAmount, 0.5), 3); // Limit zoom range
//       const gridSize = 40 * scale; // Adjust grid size dynamically
//       container.style.backgroundSize = `${gridSize}px ${gridSize}px`;
//     };

//     // Handle mouse down (start panning)
//     const handleMouseDown = (e) => {
//       // Use middle mouse button (button === 1) to initiate drag
//       if (e.button === 1) {
//         isDragging = true;
//         startX = e.clientX - offsetX;
//         startY = e.clientY - offsetY;
//         container.style.cursor = 'grabbing';
//       }
//     };

//     // Handle mouse move (update panning)
//     const handleMouseMove = (e) => {
//       if (!isDragging) return;
//       offsetX = e.clientX - startX;
//       offsetY = e.clientY - startY;
//       container.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
//     };

//     // End dragging on mouse up or when the mouse leaves the container
//     const handleMouseUp = () => {
//       isDragging = false;
//       container.style.cursor = 'default';
//     };

//     const handleMouseLeave = () => {
//       isDragging = false;
//       container.style.cursor = 'default';
//     };

//     // Prevent the default context menu and alert the user (optional)
//     const handleContextMenu = (e) => {
//       e.preventDefault();
//     };

//     // Attach event listeners
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     container.addEventListener('mousedown', handleMouseDown);
//     container.addEventListener('mousemove', handleMouseMove);
//     container.addEventListener('mouseup', handleMouseUp);
//     container.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup event listeners on unmount
//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       container.removeEventListener('mousedown', handleMouseDown);
//       container.removeEventListener('mousemove', handleMouseMove);
//       container.removeEventListener('mouseup', handleMouseUp);
//       container.removeEventListener('mouseleave', handleMouseLeave);
//       document.removeEventListener('contextmenu', handleContextMenu);
//     };
//   }, []);

//   return <div ref={containerRef} className={styles.grid_container}></div>;


  return <div className={styles.grid_container}></div>;

};

export default Background;
