import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

function EmailPasswordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (!emailTouched && email === "") {
      setEmailValid(true);
      setEmailError("");
      return;
    }

    const isValidEmail = validateEmail(email);
    setEmailValid(isValidEmail);

    if (!isValidEmail && email !== "") {
      setEmailError("Vui lòng nhập một địa chỉ email hợp lệ!");
    } else if (email === "" && emailTouched) {
      setEmailError("Email không được để trống!");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);

  useEffect(() => {
    if (!passwordTouched && password === "") {
      setPasswordValid(true);
      setPasswordError("");
      return;
    }

    const isValidPassword = validatePassword(password);
    setPasswordValid(isValidPassword);

    if (!isValidPassword && password !== "") {
      setPasswordError("Mật khẩu phải có ít nhất 8 ký tự!");
    } else if (password === "" && passwordTouched) {
      setPasswordError("Mật khẩu không được để trống!");
    } else {
      setPasswordError("");
    }
  }, [password, passwordTouched]);

  const isFormValid = emailValid && passwordValid && email !== "" && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert(`Form đã được gửi!\nEmail: ${email}\nPassword: ${"*".repeat(password.length)}`);
    }
  };

  return (
    <Container style={{ maxWidth: '500px', marginTop: '50px' }}>
      <Row>
        <Col>
          <h2>Đăng nhập</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!emailTouched) setEmailTouched(true);
                }}
                onBlur={() => setEmailTouched(true)}
                isValid={emailTouched && emailValid && email !== ""}
                isInvalid={emailTouched && !emailValid}
                placeholder="Nhập email của bạn"
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Email hợp lệ!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!passwordTouched) setPasswordTouched(true);
                }}
                onBlur={() => setPasswordTouched(true)}
                isValid={passwordTouched && passwordValid && password !== ""}
                isInvalid={passwordTouched && !passwordValid}
                placeholder="Nhập mật khẩu (ít nhất 8 ký tự)"
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Mật khẩu hợp lệ!
              </Form.Control.Feedback>
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              disabled={!isFormValid}
              className="w-100"
            >
              Đăng nhập
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EmailPasswordForm;