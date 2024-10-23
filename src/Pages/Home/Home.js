import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import Grid from "@mui/material/Grid2";
import "./Home.css"; // Ensure you reference the external CSS for styling

const Home = () => {
  return (
    <div className="homeContainer">
      <Grid container spacing={2}>
        <Grid size={8}>
          <span>
            <h2 className="highlight">I'<span>m</span></h2>
            <h1 className="nameStyle">Anu Prasanthi</h1>
          </span>
        </Grid>
        <Grid size={8}>
          <span>
            <FloatingCircle />
          </span>
        </Grid>
      </Grid>
      <ScrollDownIndicator />
    </div>
  );
};

export default Home;
