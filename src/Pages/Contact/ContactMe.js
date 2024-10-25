// Home.js
import React, { useState } from "react";
import FloatingCircle from "../../components/FloatingBubble/FloatingBubble";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import Grid from "@mui/material/Grid2";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Typography, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./ContactMe.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactMe = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [copiedVal, setCopiedVal] = useState("");
  const email = "anuprasanthipothula@gmail.com";
  const mobileno = "+1(437)974-5872";
  const handleCopyEmail = (e, val) => {
    console.log(e);
    navigator.clipboard.writeText(val);
    setCopiedVal(e);
    setSnackbarOpen(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1 }}
        className="contactStyle"
      >
        <p>
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>
        <Typography variant="subtitle1" component="div" className="emailStyle">
          <EmailOutlinedIcon className="iconStyle" />
          &nbsp;{email}&nbsp;
          <ContentCopyOutlinedIcon
            onClick={(e) => handleCopyEmail("Email", email)}
            className="copyStyle"
          />
        </Typography>
        <Typography variant="subtitle1" component="div">
          <PhoneAndroidOutlinedIcon className="iconStyle" />
          &nbsp;{mobileno}&nbsp;
          <ContentCopyOutlinedIcon
            onClick={(e) => handleCopyEmail("Mobile Number", mobileno)}
            className="copyStyle"
          />
        </Typography>
        <Typography variant="subtitle1" component="div">
        You may also find me on these platforms!
        </Typography>
        <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 3, sm: 3 }}
        className='socialStyle'
      >
       <a href="https://github.com/anuPrasanthi" target="_blank">
        <GitHubIcon style={{ color: 'white' }}/>
      </a>
      <a href="https://www.linkedin.com/in/anu-prasanthi-pothula-3a7716182/" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon className="linkedinStyle"/>
      </a>
      </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {copiedVal} copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactMe;
