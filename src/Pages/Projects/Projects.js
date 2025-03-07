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
      name: "MealMaster",
      skills: ["React", "Redux", "JavaScript", "Node.Js", "MaterialUi", "Mongodb"],
      description:
        "A food delivery platform that focuses on meal preparation kits, where users can choose from a range of meal kits (ingredients and recipe included), and get them delivered to their doorstep with real-time updates.",
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
        "An event booking platform where users can see available events in real-time, book tickets, and receive instant updates on availability. Add features like event reminders, QR code generation for ticket verification, and seat selection.",
      message: "COMING SOON",
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
            <div
              key={index}
              className="slide"
              style={{
                position: "relative", // To position elements inside the slide
                padding: "20px",
                borderRadius: "8px",
                overflow: "hidden", // Ensure no elements overflow the borders
              }}
            >
              <div
                className="blur-background"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `url(https://via.placeholder.com/800x300) no-repeat center center`, // Background image for demo
                  backgroundSize: "cover",
                  filter: "blur(0px)",
                  transition: "filter 0.3s ease-in-out",
                  zIndex: -1, // Ensure the image is behind the content
                }}
              />
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  //backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark semi-transparent overlay
                  transition: "background-color 0.3s ease-in-out",
                  zIndex: -1, // Behind the content
                }}
              />
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
                className='chip-container'
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

              {/* Display "Coming Soon" message on hover */}
              {project?.message && (
                <div
                  className="coming-soon-overlay"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0, // Initially hidden
                    color: "#8ddd8d", // Make the text color green (or adjust accordingly)
                    fontSize: "24px",
                    textAlign: "center",
                    transition: "opacity 0.3s ease-in-out", // Smooth transition on hover
                    fontWeight: "bold",
                    zIndex: 2, // Ensure it's on top of everything
                  }}
                >
                  {project.message}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Projects;
