import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Resume from "../../Lib/Resume.pdf";
import DrawerMobile from "../Drawer/Drawer";
import "../../global.css";
import "./NavBar.css";

export default function NavBar(props) {
  const { handleTheme, theme, isMobile } = props;
  const navigate = useNavigate();
  const navItems = [
    { name: "About", path: "#about" },
    { name: "What i do", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const handleClick = (e, val) => {
    e.preventDefault();
    navigate(val.path);
    const element = document.getElementById(val.path.substring(1));
    if (element) {
      element.scrollIntoView({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }} className="appBar">
      <AppBar position="static" color="">
        <Toolbar className={isMobile ? "toolBarMob" : "toolBarStyle"}>
          <h3>{"<AP />"}</h3>
          {isMobile ? (
            <DrawerMobile
              navItems={navItems}
              theme={theme}
              handleTheme={handleTheme}
            />
          ) : (
            <>
              <div className="navListStyle">
                <ul>
                  {navItems?.map((val, index) => (
                    <li key={index} onClick={(e) => handleClick(e, val)}>
                      {val?.name}
                    </li>
                  ))}
                </ul>
              </div>
              <Divider
                orientation="vertical"
                flexItem
                className="dividerStyle"
                handleTheme={handleTheme}
              />
              {theme === "light" ? (
                <DarkModeIcon className="darkStyle" onClick={handleTheme} />
              ) : (
                <LightModeIcon className="darkStyle" onClick={handleTheme} />
              )}
              <a href={Resume} download="AnuPrasanthi_CV.pdf">
                <Button className="cvStyle">Download CV</Button>
              </a>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
