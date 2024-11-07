// Home.js
import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import TechDetails from "../Skills/TechDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

const Projects = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Auto-play speed (in ms)
    arrows: false,
    pauseOnHover: true,
  };

  const projectInfo = [
    {
      name: "GlamUp",
      skills: ["React", "Redux", "JavaScript","Node.Js","MaterialUi", "CSS"],
      description:
        "A modern and user-friendly e-commerce platform that redefines the online shopping experience. Glamup offers a diverse range of clothing and accessories, catering to various styles and preferences.",
    },
    {
      name: "TickeTribe",
      skills: ['React', 'Node', 'Express', 'MongoDB', 'WebSockets', 'Stripe' , 'Firebase'],
      description:
        "An event booking platform where users can see available events in real-time, book tickets, and receive instant updates on availability. Add features like event reminders, QR code generation for ticket verification, and seat selection.",
    },
  ];

  return (
    <>
      <Chip label="Projects" className="projectsTile" />
      <Box
        className="carousel-container"
        sx={{ width: "100%", maxWidth: 800, margin: "auto" }}
      >
        <Slider {...settings}>
          {projectInfo.map((project, index) => (
            <div key={index} className="slide" style={{ padding: "20px" }}>
              <Typography variant="h5" align="center" className="slideStyle">
                {project.name}
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" className="descStyle">
                {project.description}
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "8px" }}
              >
                {project.skills.map((skill, idx) => (
                  <Chip
                  key={idx}
                  label={skill}
                  variant="outlined"
                  size="small"
                  sx={{ borderColor: "#8ddd8d", color: "#8ddd8d", marginBottom:'15px'}}
                  />
                ))}
              </Box>
            </div>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Projects;
