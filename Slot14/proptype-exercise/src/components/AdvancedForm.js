import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const AdvancedForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validate = () => {
    const newErrors = {};
    const name = formData.name.trim();
    const age = parseInt(formData.age, 10);
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
    const phoneRegex = /^\d{10,15}$/;

    if (!name || name.length < 3 || name.length > 50)
      newErrors.name = "Tên phải từ 3-50 ký tự";
    if (!formData.age || isNaN(age) || age < 18 || age > 100)
      newErrors.age = "Tuổi phải từ 18 đến 100";
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Email không hợp lệ";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Số điện thoại phải từ 10-15 chữ số";
    if (!formData.agree) newErrors.agree = "Bạn phải đồng ý với điều khoản";

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowAlert(false);
      onSubmit(formData);
    }
  };

  return (
    <Container className="my-4">
      <h3>Form Xác Thực Nâng Cao</h3>
      {showAlert && <Alert variant="danger">Vui lòng sửa lỗi trước khi gửi!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Tôi đồng ý với điều khoản"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
          />
        </Form.Group>

        <Button variant="success" type="submit">Gửi</Button>
      </Form>
    </Container>
  );
};

AdvancedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AdvancedForm;
