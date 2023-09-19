import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Registration from "./Registration"; // Import the Registration component

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // ...
    onClose(); // Close the modal after submission
  };

  const toggleRegistrationModal = () => {
    setShowRegistrationModal(!showRegistrationModal);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p>Don't have an account? <Button variant="primary" onClick={toggleRegistrationModal}>Signup</Button></p>

      <Modal show={showRegistrationModal} onHide={toggleRegistrationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registration onClose={toggleRegistrationModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
