import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"> B-S - {props.payoff}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {props.links.map((link) => (
            <Nav.Link key={link} href={"#" + link}>
              {link.slice(0, 1).toUpperCase() + link.slice(1)}
            </Nav.Link>
          ))}
          <Link to="/registration">
            <div className="nav-link ml-sm-auto ml-md-5">Register</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
