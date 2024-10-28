import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ScrollDownIndicator.css';

const ScrollDownIndicator = () => {
    const [showIndicator, setShowIndicator] = useState(true);
    const navigate = useNavigate();

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
        navigate('#about');
    };

    useEffect(() => {
        // Use IntersectionObserver to show/hide the indicator based on the visibility of #home section
        const homeSection = document.getElementById('home');
        const observer = new IntersectionObserver(
            ([entry]) => setShowIndicator(entry.isIntersecting),
            { threshold: 0.5 } // Adjust based on visibility needed
        );

        if (homeSection) observer.observe(homeSection);

        return () => {
            if (homeSection) observer.unobserve(homeSection);
        };
    }, []);

    return showIndicator ? (
        <div className="scroll-down-indicator" onClick={scrollDown}>
            <div className="arrow-down">↓</div> 
        </div>
    ) : null;
};

export default ScrollDownIndicator;
