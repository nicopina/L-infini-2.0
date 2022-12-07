import "./NewNavbar.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { DataContext } from "../../Context/DataContext";

const Emptypages = [{ name: "Iniciar Sesión", path: "/login" }];

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
    name: "Iniciar Sesión",
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
    name: "Platos",
    path: "/platos",
  },
  {
    name: "Salir",
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
    name: "Salir",
    path: "/logout",
  },
];

const Adminpages = [
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
    name: "Registro Platos",
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
    name: "Registro Categoria Platos",
    path: "/registroCategoriaPlatos",
  },
  {
    name: "Salir",
    path: "/logout",
  },
];

function Navbar() {
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
    console.log("click");
    setMenu(!menu);
  };

  const responsiveNavbar = () => {
    return (
      <div className="Navbar">
        <div className="Navbar__linfini">∞ l'infini ∞</div>
        <div className="Navbar-responsive__content">
          <div className="Navbar-responsive__links">
            {pages?.map((page, index) => (
                <Link className="Navbar-responsive__link" to={page.path}>
                {page.name}
              </Link>
            ))}
          </div>
            {/* <div className="Navbar-responsive__button">xaa</div> */}
        </div>
      </div>
    );
  };

  const normalNavbar = () => {
    return (
      <div className="Navbar">
        <div className="Navbar__linfini">∞ l'infini ∞</div>
        <div className="Navbar__links">
          {pages?.map((page, index) => (
            <Link className="Navbar__link" to={page.path}>
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {responsiveNavbar()}
      {normalNavbar()}
    </>
  );
}

export default Navbar;
