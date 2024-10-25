// ScrollDownIndicator.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './ScrollDownIndicator.css';

const ScrollDownIndicator = () => {
    const navigate = useNavigate();
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
        navigate('#about');
    };

    return (
        <div className="scroll-down-indicator" onClick={scrollDown}>
            <div className="arrow-down">↓</div> 
        </div>
    );
};

export default ScrollDownIndicator;
