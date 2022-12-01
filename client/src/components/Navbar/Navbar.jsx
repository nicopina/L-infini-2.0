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
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/DataContext";
import { Cart } from "../ShoppingCart/Cart";
import { UserContext } from "../../Context/UserContext";

import "./Navbar.css";

const Userpages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Asistencia",
    path: "/asistencia",
  },
  {
    name: "Pedidos",
    path: "/pedidos",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
  {
    name: "Login",
    path: "/login",
  },
];
const Waiterpages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Asistencias",
    path: "/asistencias",
  },
  {
    name: "Pedidos Activos",
    path: "/pedidosActivos",
  },
  {
    name: "Platos",
    path: "/platos",
  },
  {
    name: "Logout",
    path: "/logout",
  },
];

const Chefpages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Pedidos Activos",
    path: "/pedidosActivos",
  },
  {
    name: "Platos",
    path: "/platos",
  },
  {
    name: "Logout",
    path: "/logout",
  },
];

const Adminpages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Asistencias",
    path: "/asistencias",
  },
  {
    name: "Pedidos Activos",
    path: "/pedidosActivos",
  },
  {
    name: "Platos",
    path: "/platos",
  },
  {
    name: "Usuarios",
    path: "/usuarios",
  },
  {
    name: "Logout",
    path: "/logout",
  },
];

function ResponsiveAppBar() {
  const user = useContext(UserContext)[0];
  const [pages, setPages] = useState(Userpages);

  useEffect(() => {
    if (user.role === null) {
      // if user is not logged in
      setPages(Userpages);
    } else if (user.role === 1) {
      // if user is admin
      setPages(Adminpages);
    } else if (user.role === 2) {
      // if user is chef
      setPages(Chefpages);
    } else if (user.role === 3) {
      // if user is waiter
      setPages(Waiterpages);
    }
  }, [user]);

  const value = useContext(DataContext);
  // console.log(value);
  // const [menu, setMenu] = value.menu;
  // const [carrito] = value.carrito;

  // const toggleMenu = () => {
  //   console.log("click");
  //   setMenu(!menu);
  // };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <Container className="NavBar" maxWidth="xl">
        <Toolbar disableGutters>
          <AllInclusiveIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            l'infini
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages?.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link to={page.path}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
            {/* <div className="cart" onClick={toggleMenu}>
            <box-icon name="cart" ></box-icon>
            <span className="item_total">{carrito.length}</span>
          </div> */}
          </Box>
          <AllInclusiveIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            l'infini
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages?.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link to={page.path} style={{ color: "white" }}>
                  {page.name}
                </Link>
              </MenuItem>
            ))}
            {/* <div className="cart" onClick={toggleMenu}>
            <box-icon name="cart" ></box-icon>
            <span className="item_total">{carrito.length}</span>
          </div> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
