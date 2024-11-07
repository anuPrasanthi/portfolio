import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import Grid from "@mui/material/Grid2";
import Badge from "@mui/material/Badge";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./Home.css";

const Home = () => {
  const savedTheme = localStorage.getItem("theme");
  return (
    <div className={savedTheme ==='light' ? 'lightmode homeContainer' : "darkMode homeContainer"} id="home">
      <Grid container spacing={2} className="subContainer">
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
              every time something new comes to life making the web a little bit
              better, one app at a time!
            </p>
          </span>
          <div>
            <div className="statusStyle">
              <LocationOnOutlinedIcon mr={2} />
              <p>Toronto, ON, Canada</p>
            </div>
            <div className="statusStyle">
              <Badge className="badgeStyle" color="success"></Badge>&nbsp;
              <p>Available for new role</p>
            </div>
          </div>
        </Grid>
        <Grid size={8}>
          <span>
            <FloatingCircle />
          </span>
        </Grid>
        <ScrollDownIndicator />
      </Grid>
      
    </div>
  );
};

export default Home;
