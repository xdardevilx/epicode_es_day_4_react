import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function SubNavBarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">TV Shows</Navbar.Brand>
        <NavDropdown
          className="text-white"
          title="Genres"
          id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <i className="bi bi-grid icons me-2"></i>{" "}
            <i className="bi bi-grid-3x3 icons"></i>
          <Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SubNavBarComponent;
