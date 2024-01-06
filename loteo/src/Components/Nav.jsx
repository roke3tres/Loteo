import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Nav.css";
import {Link} from "react-router-dom";

function BasicExample() {
  return (
    <Navbar sticky="top" expand="lg" data-bs-theme="dark" className="bg-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav href="#home">
              <Link
                className="text-decoration-none text-light mt-2 me-2"
                to="/"
              >
                Inicio
              </Link>
            </Nav>
            <NavDropdown title="Proyecto" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/lotes10004000"
                >
                  Lotes de 1000 + 4000 m2
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/lotes4000"
                >
                  Lotes de 4000 m2
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Modelos 3D" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/modelopredio"
                >
                  Vista General
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/tierrayvino"
                >
                  Casa Tierra y Vino
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/taller"
                >
                  Casa Taller de Cerámica
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Fotos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/modelopredio"
                >
                  Album General
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/tierrayvino"
                >
                  Casa Tierra y Vino
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/taller"
                >
                  Casa Taller de Cerámica
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                <Link
                  className="text-decoration-none text-light mt-2"
                  to="/taller"
                >
                  Casa La Portuguesa
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
