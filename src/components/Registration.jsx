import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { emailValidator } from "../validators";

const renderErrors = (errors) => errors.map((error) => renderError(error));

const renderError = (errorMessage) => (
  <div className="d-flex justify-content-start align-items-center m-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#913"
      className="bi bi-exclamation-square-fill mx-3"
      viewBox="0 0 16 16"
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
    <span style={{ color: "red" }}>{errorMessage}</span>
  </div>
);

const errors = [
  "Must be at least 8 chars long",
  "Must have at least 1 digit",
  "Must have at least 1 letter",
];

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = emailValidator.validate(email);
  const isPasswordValid = false;

  return (
    <Form className="d-flex flex-column justify-content-center items-align-center my-5 mx-3 px-2">
      <Form.Group className="mx-5 my-1 px-2" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Name"
          required
          minLength={2}
        />
      </Form.Group>
      <Form.Group className="mx-5 my-1 px-2" controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Surname"
          required
          minLength={3}
        />
      </Form.Group>

      <Form.Group className="mx-5 my-1 px-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter email"
          autoComplete="off"
          required
        />
        <Form.Text className="text-muted">
          {!isEmailValid && renderError("Email not valid!")}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mx-5 my-1 px-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          autoComplete="off"
          required
        />
        {!isPasswordValid ? renderErrors(errors) : null}
      </Form.Group>

      <Form.Group
        className="mx-5 my-1 px-2"
        controlId="formBasicPasswordConfirm"
      >
        <Form.Label>Confirm your Password </Form.Label>
        <Form.Control
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password-confirm"
          placeholder="Confirm your Password"
          autoComplete="off"
          required
        />
      </Form.Group>

      <Button
        className="d-flex justify-content-center mx-5 my-3"
        variant="primary"
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
}

export default Registration;
