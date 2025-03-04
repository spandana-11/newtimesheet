import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./HomePage.css"; // Include a CSS file for custom styling
import "bootstrap/dist/css/bootstrap.css";
import HamburgerMenu from "./HamburgerMenu";
import { Container, Row, Col } from "react-bootstrap";
import image from "../Image/Homepage.jpg";
import { useNavigate } from "react-router-dom";






function HomePage() {
 
     const navigate = useNavigate();
     const handleLoginClick = () => {
      console.log("button Clicked");
       navigate("/TimesheetLogin"); // Navigate to the TimesheetLogin page
     };



  return (
    <div className="homepage-container d-flex flex-column align-items-center justify-content-center">
      <HamburgerMenu />
      <div className="container text-center my-auto bg-light shadow p-5 rounded">
        <Container>
          <Row>
            {/* First Column (Text) */}
            <Col
              sm={6}
              className="d-flex flex-column justify-content-center text-center"
            >
              <h1 className="homepage-heading">Welcome to Our Website</h1>
              <p>
                We provide the best services to help you grow your business. Our
                team is dedicated to delivering top-notch solutions tailored to
                your specific needs.
              </p>
              <Button className="homepage-login-button" variant="primary" onClick={handleLoginClick}>
                Login
              </Button>
            </Col>

            {/* Second Column (Image) */}
            <Col
              sm={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={image}
                alt="Example"
                style={{ width: "450px", height: "auto" }}
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
