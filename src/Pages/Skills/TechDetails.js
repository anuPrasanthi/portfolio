// Home.js
import React from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import TECHNOLOGIES from "../../Lib/data";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { deepOrange, deepPurple } from "@mui/material/colors";
import "./Skills.css";

const TechDetails = (props) => {
  const { technology } = props;
  const savedTheme = localStorage.getItem("theme");
  return (
    <Grid size={4}>
      <a href={technology?.url} target="_blank">
        <img src={savedTheme === 'light' ? technology?.logo : (technology?.darkModeLogo ? technology?.darkModeLogo : technology?.logo )} className="logoStyle" />
      </a>
      <p>{technology?.label}</p>
    </Grid>
  );
};

export default TechDetails;
