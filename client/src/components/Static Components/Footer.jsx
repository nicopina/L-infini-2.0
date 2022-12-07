import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import "./Footer.css";

function Footer() {
  return (
    <footer style={{ bottom: "0", width: "100%" }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Ad Infinitum &reg; {new Date().getFullYear()}
            <img
              src="https://cdn.discordapp.com/attachments/966850902319321183/1048086293642481746/Screenshot_2022-12-02_at_00.53.30-PhotoRoom-2.png"
              width="100px"
            />
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
export default Footer;
