// Home.js
import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import Grid from "@mui/material/Grid2";
import './About.css'

const About = () => {
  return (
    <div
      style={{ height: "100vh"}}
    >
      {/* backgroundColor: "#282c34", color: "white" */}
      <Grid container spacing={2}>
        <Grid size={8}>
          <h1>Abou Me</h1>
        </Grid>
      </Grid>
      <ScrollDownIndicator />
    </div>
  );
};

export default About;
