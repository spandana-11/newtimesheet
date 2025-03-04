import {React,useState} from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import HamburgerMenu from "./HamburgerMenu";
import servicesImage from "../Image/services.png"; // Renamed to avoid conflict
import "./AboutUs.css";

function SupportServices() {

 const [showInfo, setShowInfo] = useState(false);
 const handleShow = () => {
   setShowInfo(!showInfo);
 };
 const handleShowInfo = () => setShowInfo(false);



  return (
    <div className="homepage-container d-flex flex-column align-items-center justify-content-center">
      <HamburgerMenu />
      <div className="container text-center my-auto bg-light shadow p-5 rounded">
        <Container>
          <Row>
            {/* First Column (Text) */}
            <Col
              md={6}
              className="d-flex flex-column justify-content-center text-center"
            >
              <h1 className="homepage-heading">Your Vision, Our Expertise</h1>
              <p>
                We provide the best services to help you grow your business. Our
                team is dedicated to delivering top-notch solutions tailored to
                your specific needs.
              </p>
              {showInfo ? (
                <div>
                  <div className="services-container">
                    <h2>Our Services</h2>
                    <ul>
                      <li>iOS & Android Development</li>
                      <li>E-commerce Solutions</li>
                      <li>Custom Website Development</li>
                      <li>UI/UX Design</li>
                      <li>API Integration</li>
                      <li>Maintenance & Support</li>
                    </ul>
                  </div>
                  <Button onClick={handleShowInfo}>Know Less...</Button>
                </div>
              ) : (
                <Button
                  className="homepage-login-button"
                  variant="primary"
                  onClick={handleShow}
                >
                  Click for Detail Services
                </Button>
              )}
            </Col>

            {/* Second Column (Image) */}
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={servicesImage} // Updated image source
                alt="Services"
                // style={{ width: "750px", height: "auto" }}
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SupportServices;
