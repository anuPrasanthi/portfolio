// Home.js
import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import "./About.css";

const About = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid size={6}></Grid>
        <Grid size={6} className="aboutSec2">
          <h2>About Me</h2>
          <p>
              In a world brimming with pixels and possibilities, I dance between
              creativity and technology, crafting web experiences that spark joy
              and curiosity. As a web developer, I see each project as an
              opportunity to tell a story, inviting users on an unforgettable
              journey. My approach blends a meticulous eye for detail with a
              splash of playful innovation, ensuring that every interaction
              feels as seamless as it is captivating.
          </p>
          <p>
              Curiosity is my compass, guiding me through the ever-evolving
              landscape of the digital realm. I thrive on collaboration,
              believing that great ideas flourish when shared and explored
              together. Whether I’m tackling a complex challenge or
              brainstorming fresh concepts, my passion for creating memorable
              digital experiences shines through. Join me on this adventure, and
              let’s bring visions to life with creativity and flair.
            </p>
        </Grid>
      </Grid>
    </Box>
    // <div style={{ height: "100vh" }} id="about">
    //   {/* backgroundColor: "#282c34", color: "white" */}
    //   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} >
    //   <h1>Abou Me</h1>
    //     <Grid size={6}>
    //       <h4>
    //         {" "}
    //         A creative problem-solver and passionate web developer, with a knack
    //         for turning ideas into interactive digital experiences. I specialize
    //         in crafting beautiful, responsive websites with a focus on
    //         functionality and cutting-edge technology. My approach to
    //         development bridges the gap between design and code, ensuring that
    //         every user touchpoint is seamless, engaging, and memorable.
    //       </h4>
    //     </Grid>
    //     <Grid size={6}>
    //       <h4>
    //         {" "}
    //         A creative problem-solver and passionate web developer, with a knack
    //         for turning ideas into interactive digital experiences. I specialize
    //         in crafting beautiful, responsive websites with a focus on
    //         functionality and cutting-edge technology. My approach to
    //         development bridges the gap between design and code, ensuring that
    //         every user touchpoint is seamless, engaging, and memorable.
    //       </h4>
    //     </Grid>
    //   </Grid>
    //   <ScrollDownIndicator />
    // </div>
  );
};

export default About;
