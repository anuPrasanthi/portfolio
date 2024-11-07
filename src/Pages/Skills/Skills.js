// Home.js
import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import { TECHNOLOGIES } from "../../Lib/data";
import Chip from '@mui/material/Chip';
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import TechDetails from "./TechDetails";
import { deepOrange, deepPurple } from "@mui/material/colors";
import "./Skills.css";

const Skills = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme?.palette?.text?.secondary,
    height: 120,
    width: 280,
    lineHeight: "60px",
    padding: "3px",
  }));

  const roles = [
    { name: "Full Stack Deveoper", short: "FS" },
    { name: "Sr.Frontend Developer", short: "SD" },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Chip label="What I Do"  className="skillTile"/>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        className="paperstyle"
      >
        {roles.map((role, index) => (
          <Grid xs={6} key={index}>
            {/* <ThemeProvider theme={theme}> */}
            {/* <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 2,
                }}
              > */}
            <Item key={index}>
              <Avatar>{role?.short}</Avatar>
              {role?.name}
            </Item>
            {/* </Box> */}
            {/* </ThemeProvider> */}
          </Grid>
        ))}
      </Grid>
      <h3 className="techTile">The skills, tools and technologies I am really good at:</h3>
      <Grid container spacing={6} columns={{ xs: 24, sm: 24, md: 24 }} className='techStyle'>
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails technology={technology} key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
