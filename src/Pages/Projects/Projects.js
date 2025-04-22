import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import echosphere from '../../Images/echosphere.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
  };

  const projectInfo = [
    {
      name: "Echo Sphere",
      skills: ["React", "Redux", "JavaScript", "Typescript", "MaterialUi"],
      description:
        "A sleek, responsive landing page designed for a Voice Agent product. UI built in React, focused on clean layout and user engagement.",
      url: "https://merry-tartufo-7c2854.netlify.app/",
      image: echosphere,
    },
    {
      name: "MealMaster",
      skills: ["React", "Redux", "JavaScript", "Node.Js", "MaterialUi", "Mongodb"],
      description:
        "A meal kit delivery platform with real-time updates. UI is in progress.",
      message: "COMING SOON",
    },
    {
      name: "TickeTribe",
      skills: [
        "React",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
        "WebSockets",
        "Stripe",
        "Firebase",
      ],
      description:
        "An event booking platform with real-time availability, reminders, and QR check-ins.",
      message: "COMING SOON",
    },
  ];

  return (
    <>
      <Chip label="Projects" className="projectsTile" />
      <Box className="carousel-container" sx={{ width: "100%", maxWidth: 800, margin: "auto" }}>
        <Slider {...settings}>
          {projectInfo.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const hasImage = !!project.image;
            const hasUrl = !!project.url;

            return (
              <div
                key={index}
                className="slide"
                style={{
                  position: "relative",
                  padding: "20px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: hasUrl ? "pointer" : "default",
                }}
                onClick={() => {
                  if (hasUrl) window.open(project.url, "_blank");
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover background logic */}
                {isHovered && (
                  <div
                    className="hover-background"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: hasImage
                        ? `url(${project.image}) no-repeat center center`
                        : "#000",
                      backgroundSize: "cover",
                      filter: hasImage ? "blur(2px)" : "none",
                      transition: "all 0.3s ease-in-out",
                      zIndex: -1,
                    }}
                  />
                )}

                <Typography variant="h5" align="center" className="slideStyle">
                  {project.name}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                  className="descStyle"
                >
                  {project.description}
                </Typography>
                <Box className="chip-container" sx={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                  {project.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: "#8ddd8d",
                        color: "#8ddd8d",
                        marginBottom: "15px",
                      }}
                    />
                  ))}
                </Box>

                {/* Coming Soon message only on hover and when no URL */}
                {!hasUrl && project.message && isHovered && (
                  <div
                    className="coming-soon-overlay"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#8ddd8d",
                      fontSize: "24px",
                      fontWeight: "bold",
                      textAlign: "center",
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                  >
                    {project.message}
                  </div>
                )}
              </div>
            );
          })}
        </Slider>
      </Box>
    </>
  );
};

export default Projects;
