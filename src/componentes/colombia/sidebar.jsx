
import React, { useState, useEffect } from "react";

const Sidebar = ({ width, height , children }) => {

    const [xPosition, setX] = useState(-width);
    
    const toggleMenu = () => {
        if (xPosition < 0) {
          setX(0);
        } else {
          setX(-width);
        }
      };
    
      useEffect(() => {
        setX(0);
      }, []);

  return (


        <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
          <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        ></button>
    <div className="content">{children}</div>
      </div>
  );
};
export default Sidebar