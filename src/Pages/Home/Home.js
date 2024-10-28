import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import Grid from "@mui/material/Grid2";
import Badge from '@mui/material/Badge';
import "./Home.css"; // Ensure you reference the external CSS for styling

const Home = () => {
  return (
    <div className="homeContainer" id="home">
      <Grid container spacing={2}>
        <Grid size={8} className="sec1Style">
          <span>
            <h2 className="highlight">
              H!, I'<span>m</span>
            </h2>
            <h1 className="nameStyle">Anu Prasanthi</h1>
            <p>
              A full stack developer (React.js & Node.js) on a mission to bring
              creative ideas to life through code! From sleek designs to smooth
              functionality, there’s a commitment to crafting digital
              experiences that are fast, stunning, and user-friendly. With over
              six years in the game, that rush of excitement is still there
              every time something new comes to life—making the web a little bit
              better, one app at a time!
            </p>
            <Badge
                className="badgeStyle"
                variant="dot"
                color="success" // Sets the color of the dot to green
            >
                {/* No icon or text inside */}
            </Badge>
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
