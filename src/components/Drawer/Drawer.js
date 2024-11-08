import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Menu from "@mui/icons-material/Menu";
import "./Drawer.css";

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
        variant="solid"
      >
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 450,
            display: "flex",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
            justifyContent: "center",
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Divider inset="none" />
          <List className="listStyle">
            {navItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={item.path}
                className={theme === "light" ? "drawerListlight" : "drawerList"}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
            <span className="sectionStyle">
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
              <Button
                href="Resume.pdf"
                download="AnuPrasanthi_CV.pdf"
                style={{ color: "#8ddd8d", marginLeft: "15px" }}
              >
                Download CV
              </Button>
            </span>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
