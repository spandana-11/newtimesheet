import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import "./AboutUs.css"; // Include a CSS file for custom styling
import "bootstrap/dist/css/bootstrap.css";
import HamburgerMenu from "./HamburgerMenu";
import { Container, Row, Col } from "react-bootstrap";
import aboutus from "../Image/aboutus.png";


function Aboutus() {
  const [showInfo, setShowInfo] = useState(false);
   const handleShow = () => {
     setShowInfo(!showInfo);

   };
   const handleShowInfo = ()=> setShowInfo(false);


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
              <h1 className="homepage-heading">Our Story, Your Success.</h1>
              <p>
                We provide the best services to help you grow your business. Our
                team is dedicated to delivering top-notch solutions tailored to
                your specific needs.
              </p>
              {showInfo ? (
                <div>
                  <p>
                    Founded in 2020, Chieslon Technologies started with a vision
                    to change the way people approach Software Industries. With
                    a small team of dedicated professionals, we began by
                    offering a few core services. Today, we have grown into a
                    full-fledged team of experts serving clients around the
                    world.
                  </p>
                  <p>
                    As we grow, we remain committed to innovation and client
                    satisfaction. We're constantly evolving, always looking for
                    new ways to add value to our services and to your experience
                    with us.
                  </p>
                  <Button onClick={handleShowInfo}>Know Less...</Button>
                </div>
              ) : (
                <Button
                  className="homepage-login-button"
                  variant="primary"
                  onClick={handleShow}
                >
                  Know More &gt;&gt;
                </Button>
              )}
            </Col>

            {/* Second Column (Image) */}
            <Col
              sm={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={aboutus}
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

export default Aboutus;
