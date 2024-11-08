import Paper from "@mui/material/Paper";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { styled } from "@mui/material/styles";
import './Footer.css'

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme?.palette?.text?.secondary,
    height: 70,
    lineHeight: "60px",
    padding: "3px",
  }));
  return (
    <Item>
      <p className="footerStyle">
       <CopyrightIcon/> 2024 | Designed and coded with ❤️️ by AnuPrasanthi Pothula
      </p>
    </Item>
  );
};

export default Footer;
