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
  const items = [
    { title: "Slide 1", content: "This is the first slide" },
    { title: "Slide 2", content: "This is the second slide" },
    { title: "Slide 3", content: "This is the third slide" },
  ];

  const projectInfo = [
    {
      name: "Wingie",
      imageUrl: "",
      skills: ["React", "Redux", "Javascript", "css"],
      description:
        "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
      src: "",
    },
    {
      name: "Pepehousing",
      imageUrl: "",
      skills: ["React", "Redux", "Javascript", "css"],
      description:
        "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
      src: "",
    },
    {
      name: "Wingie",
      imageUrl: "",
      skills: ["React", "Redux", "Javascript", "css"],
      description:
        "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
      src: "",
    },
  ];
  return (
    // <Box sx={{ width: "100%" }}>
    <>
      <Chip label="Projects" className="projectsTile" />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {/* /* <Grid size={6}></Grid>
        <Grid size={6}></Grid>  */}
        {/* <Slider {...settings}> */}
        {items?.map((item, index) => (
          <div key={index} className="slide" style={{ padding: "20px", textAlign: "center" }}>
            {/* {item?.title} */}
            {/* <Typography variant="h4" color="white" align="center" sx={{ pt: 2 }}>
              {item?.title}
            </Typography> */}
            {/* <Typography variant="body1" color="white" align="center">
              {item.content}
            </Typography> */}
          </div>
        ))}
        {/* </Slider> */}
      </Grid>
    </>

    // </Box>
  );
};

export default Projects;
