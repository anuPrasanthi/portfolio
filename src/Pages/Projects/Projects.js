import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

const Projects = () => {
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
      name: "GlamUp",
      skills: ["React", "Redux", "JavaScript", "Node.Js", "MaterialUi", "CSS"],
      description:
        "A modern and user-friendly e-commerce platform that redefines the online shopping experience. Glamup offers a diverse range of clothing and accessories, catering to various styles and preferences.",
    },
    {
      name: "TickeTribe",
      skills: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "WebSockets",
        "Stripe",
        "Firebase",
      ],
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
              <Typography
                variant="body1"
                align="center"
                color="textSecondary"
                className="descStyle"
              >
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
                    sx={{
                      borderColor: "#8ddd8d",
                      color: "#8ddd8d",
                      marginBottom: "15px",
                    }}
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
