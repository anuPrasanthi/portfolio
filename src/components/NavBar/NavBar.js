// src/components/NavBar/NavBar.js
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";
import "../../global.css";
import "./NavBar.css";

export default function NavBar(props) {
  const { handleTheme } = props;
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const handleClick = (e, val) => {
    if (val?.path) {
      navigate(val?.path);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="appBar">
      <AppBar position="static" color="">
        <Toolbar className="toolBarStyle">
          <DarkModeIcon className="darkStyle" color="" onClick={handleTheme} />
          <div className="navListStyle">
            <ul>
              {navItems?.map((val, index) => (
                <li key={index} onClick={(e) => handleClick(e, val)}>
                  {val?.name}
                </li>
              ))}
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
