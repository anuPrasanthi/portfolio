// // src/components/FloatingCircle.js
// import React, { useState } from 'react';
// import './FloatingBubble.css';

// const FloatingCircle = () => {
//   const [borderStyle, setBorderStyle] = useState({ transform: 'translate(0%, 0%)' });

//   const handleMouseMove = (e) => {
//     const circle = document.querySelector('.circle');
//     const { left, top, width, height } = circle.getBoundingClientRect();

//     // Calculate the position relative to the circle's center
//     const offsetX = ((e.clientX - left) / width) * 100 - 50;
//     const offsetY = ((e.clientY - top) / height) * 100 - 50;

//     // For edge pop-out effect
//     const popOutX = Math.abs(offsetX) > 40 ? 10 : 0;
//     const popOutY = Math.abs(offsetY) > 40 ? 10 : 0;

//     setBorderStyle({
//       transform: `translate(${offsetX + popOutX}%, ${offsetY + popOutY}%)`,
//     });
//   };

//   return (
//     <div className="floating-circle" onMouseMove={handleMouseMove}>
//       <div className="circle blue">
//         <div className="border" style={borderStyle}></div>
//         <img src="your-image-url.jpg" alt="floating" className="floating-image" />
//       </div>
//     </div>
//   );
// };
import anu from '../../Images/anu.jpg'
import React, { useState } from "react";
import './FloatingBubble.css';

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
                src={anu} // Replace with your image path
                alt="Floating Bubble" 
                className={`bubble-image ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    );
};

export default FloatingCircle;








