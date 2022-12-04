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
    <footer style={{"bottom":"0", "width": "100%"}}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Páginas Relacionadas</Box>
              <Box>
                <Link href="/" color="inherit">
                  
                </Link>
              </Box>
              <Box>
                <a href="https://fixum.herokuapp.com/" color="inherit" target="_blank">
                  FIXUM
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Ad Infinitum &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
export default Footer;