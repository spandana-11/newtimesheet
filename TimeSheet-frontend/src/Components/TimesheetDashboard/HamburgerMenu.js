import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink and useNavigate
import "./HamburgerMenu.css"; // Include a CSS file for custom styling
import logo from "../Image/logochiselon.png"; // Ensure you import your logo image

const HamburgerMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setExpanded((prev) => !prev);
  };

  const handleLoginClick = () => {
    navigate("/TimesheetLogin"); // Navigate to the TimesheetLogin page
  };

  return (
    <>
      <Navbar
        expanded={expanded}
        expand="lg"
        className="hamburgermenu-custom-navbar"
      >
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Logo and Name */}
          <div className="hamburgermenu-logo-container d-flex align-items-center">
            <img src={logo} alt="CGT Logo" className="hamburgermenu-logo" />
            <span className="hamburgermenu-logo-text">CGT</span>
          </div>
          <div className="d-flex align-items-center">
            <Button
              className="login-button"
              variant="outline-primary"
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMenu}
              className="ms-3"
            >
              <GiHamburgerMenu className="hamburgermenu-icon" />
            </Navbar.Toggle>
          </div>
        </div>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`collapse-menu ${expanded ? "show" : ""}`}
        >
          <Nav className="me-auto hamburgermenu-nav-links">
            <NavLink
              to="/"
              className="hamburgermenu-nav-link"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/homepage/about"
              className="hamburgermenu-nav-link"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/homepage/services"
              className="hamburgermenu-nav-link"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/homepage/contactus"
              className="hamburgermenu-nav-link"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HamburgerMenu;
