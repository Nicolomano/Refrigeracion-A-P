import { Box } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
          <a className="navbar-brand" href="#">
            Refrigeracion A&P
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"}>
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/catalogue"}>
                <a className="nav-link" href="#">
                  catalogo
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                categorias
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={`/category/${"caños"}`}>
                    <a className="dropdown-item" href="#">
                      Caños
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={`/category/${"mensulas"}`}>
                    <a className="dropdown-item" href="#">
                      Mensulas
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={`/category/${"manometros"}`}>
                    <a className="dropdown-item" href="#">
                      Manometros
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Box>
      <Link to={`/cart`}>
        <CartWidget />
      </Link>
      </Box>
    </nav>
  );
};

export default NavBar;
