import anu from "../../Images/anu.jpg";
import React, { useState } from "react";
import "./FloatingBubble.css";

const FloatingCircle = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bubble-container">
      <img
        src={anu}
        alt="Floating Bubble"
        className={`bubble-image ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default FloatingCircle;
