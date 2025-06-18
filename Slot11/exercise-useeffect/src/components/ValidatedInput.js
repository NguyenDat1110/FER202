import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

const validateInput = (value) => {
  return value.length >= 5; 
};

function ValidatedInput() {
  const [value, setValue] = useState(""); 
  const [isValid, setIsValid] = useState(true); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [touched, setTouched] = useState(false); 

  useEffect(() => {
    if (!touched && value === "") {
      setIsValid(true);
      setErrorMessage("");
      return;
    }

    const isValidInput = validateInput(value);
    setIsValid(isValidInput); 

    if (!isValidInput) {
      setErrorMessage("Giá trị phải có ít nhất 5 ký tự!"); 
    } else {
      setErrorMessage(""); 
    }
  }, [value, touched]); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && value.length >= 5) {
      alert(`Dữ liệu đã được gửi: ${value}`);
    }
  };

  return (
    <Container style={{ maxWidth: '500px', marginTop: '50px' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="validatedInput">
          <Form.Label>Nhập một giá trị</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (!touched) setTouched(true);
            }}
            onBlur={() => setTouched(true)} 
            isValid={touched && isValid && value.length >= 5}
            isInvalid={touched && !isValid}
            placeholder="Nhập ít nhất 5 ký tự"
          />
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Dữ liệu hợp lệ!
          </Form.Control.Feedback>
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit" 
          disabled={!isValid || value.length < 5}
          style={{ marginTop: '10px' }}
        >
          Gửi
        </Button>
      </Form>
    </Container>
  );
}

export default ValidatedInput;