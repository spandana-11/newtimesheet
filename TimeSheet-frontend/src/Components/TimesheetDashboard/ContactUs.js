import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import HamburgerMenu from "../TimesheetDashboard/HamburgerMenu";
import contactus from "../Image/contactus.png";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.css";

function ContactUs() {
  const [showInfo, setShowInfo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleShow = () => {
    setShowInfo(!showInfo);
  };

  const handleHideForm = () => setShowInfo(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Sending data to the server
      const response = await fetch(
        "https://6639c0af1ae792804beca820.mockapi.io/contactFormData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Converting form data to JSON
        }
      );

      if (response.ok) {
        // Reset form data and update status
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus("Thank you! Your message has been sent.");
      } else {
        setSubmitStatus("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setSubmitStatus("There was an error sending your message.");
    }
  };

  return (
    <div className="homepage-container d-flex flex-column align-items-center justify-content-center">
      <HamburgerMenu />
      <div className="container text-center my-auto bg-light shadow p-5 rounded">
        <Container>
          <Row>
            <Col
              md={6}
              className="d-flex flex-column justify-content-center text-center"
            >
              <h1 className="homepage-heading">
                Your Next Project Starts with a Conversation.
              </h1>

              {showInfo ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    as={Row}
                    controlId="formName"
                    className="align-items-center mb-3"
                  >
                    <Form.Label column sm="4" className="text-right">
                      Name:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="gray-input"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="formEmail"
                    className="align-items-center mb-3"
                  >
                    <Form.Label column sm="4" className="text-right">
                      Email:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="gray-input"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="formMessage"
                    className="align-items-center mb-3"
                  >
                    <Form.Label column sm="4" className="text-right">
                      Message:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="gray-input"
                      />
                    </Col>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Submit
                  </Button>
                  <Button
                    variant="secondary"
                    className="mt-3 ml-5 custom-margin"
                    onClick={handleHideForm}
                  >
                    Cancel
                  </Button>

                  {/* Displaying the submit status message */}
                  {submitStatus && <p className="mt-3">{submitStatus}</p>}
                </Form>
              ) : (
                <div>
                  <p>
                    We provide the best services to help you grow your business.
                    Our team is dedicated to delivering top-notch solutions
                    tailored to your specific needs.
                  </p>
                  <Button
                    className="homepage-login-button"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Click for Contact Details
                  </Button>
                </div>
              )}
            </Col>

            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={contactus}
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

export default ContactUs;
