import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AgeCalculator.css"; // Import the CSS file

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(null);

  const handleChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const calculateAge = () => {
    if (dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setAge(age);
      toast.success(`Your age is: ${age} years`, {
        transition: Bounce,
        autoClose: 5000,
        position: "top-center", // Set the toast position to top-center
      });
    } else {
      toast.error("Please enter a valid date of birth", {
        transition: Bounce,
        autoClose: 5000,
        position: "top-center", // Set the toast position to top-center
      });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center">Age Calculator</h2>
          <Form>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your date of birth"
                value={dateOfBirth}
                onChange={handleChange}
                className="date-input"
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={calculateAge}
              className="calculate-button mt-5"
            >
              Calculate Age
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default AgeCalculator;
