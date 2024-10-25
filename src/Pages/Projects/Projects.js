// Home.js
import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import Grid from "@mui/material/Grid2";
import Box from '@mui/material/Box';
import "./Projects.css";

const Projects = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <h1>Projects</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid size={6}>
          
        </Grid>
        <Grid size={6}>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
