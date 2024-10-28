// src/components/Drawer/DrawerMobile.js
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
import Menu from "@mui/icons-material/Menu";

export default function DrawerMobile({ navItems, theme, handleTheme }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} component="a" href={item.path}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
            <Box sx={{ mt: 2 }}>
              {theme === "light" ? (
                <DarkModeIcon
                  onClick={handleTheme}
                  sx={{ cursor: "pointer" }}
                />
              ) : (
                <LightModeIcon
                  onClick={handleTheme}
                  sx={{ cursor: "pointer" }}
                />
              )}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button href="Resume.pdf" download="AnuPrasanthi_CV.pdf">
                Download CV
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
