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

const Emptypages = [{ name: "Login", path: "/login" }];

const Userpages = [
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Pedidos",
    path: "/pedidos",
  },
  {
    name: "Asistencia",
    path: "/asistencia",
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
    name: "Pedidos Pendientes",
    path: "/pedidosPendientes",
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
    name: "RegistroPlatos",
    path: "/registroPlatos",
  },
  {
    name: "Mesas",
    path: "/mesas",
  },
  {
    name: "Usuarios",
    path: "/usuarios",
  },
  {
    name: "Reportes",
    path: "/reportes",
  },
  {
    name: "Logout",
    path: "/logout",
  },
  {
    name: "RegistroCategoriaPlatos",
    path: "/registroCategoriaPlatos",
  },
];

function ResponsiveAppBar() {
  const [user, setUser, table, setTable] = useContext(UserContext);
  const [pages, setPages] = useState(Userpages);

  useEffect(() => {
    if (table === undefined) {
      setPages(Emptypages);
    } else if (user.role === null) {
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
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toggleMenu = () => {
    setMenu(!menu);
  };

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
    <AppBar style={{ background: "#1b1919" }}>
      <Container className="NavBar" maxWidth="xl">
        <Toolbar disableGutters>
          <AllInclusiveIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />

          {/* Content */}

          <div className="Navbar__content">
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

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                width: "100%",
              }}
            >
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
              <div className="Navbar__content__right">
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <div className="Navbar__content__items">
                  {pages?.map((page, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Link to={page.path}>{page.name}</Link>
                    </MenuItem>
                  ))}
                  </div>
                </Menu>
                {user.role === null && table !== undefined ? (
                  <div className="cart" onClick={toggleMenu}>
                    <box-icon name="cart"></box-icon>
                    <span className="item_total">{carrito.length}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Box>
          </div>
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

            {user.role === null && table !== undefined ? (
              <div className="cart" onClick={toggleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item_total">{carrito.length}</span>
                {menu ? <Cart /> : ""}
              </div>
            ) : (
              ""
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
