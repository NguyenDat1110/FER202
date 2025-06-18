import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function CompleteForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [nameValid, setNameValid] = useState(true);
  const [genderValid, setGenderValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);
  const [agreedValid, setAgreedValid] = useState(true);

  const [nameTouched, setNameTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);
  const [countryTouched, setCountryTouched] = useState(false);
  const [agreedTouched, setAgreedTouched] = useState(false);

  const validateName = (value) => {
    return value.trim().length >= 2;
  };

  const validateGender = (value) => {
    return value !== "";
  };

  const validateCountry = (value) => {
    return value !== "";
  };

  const validateAgreed = (value) => {
    return value === true;
  };

  useEffect(() => {
    if (!nameTouched && name === "") {
      setNameValid(true);
      return;
    }
    setNameValid(validateName(name));
  }, [name, nameTouched]);

  useEffect(() => {
    if (!genderTouched && gender === "") {
      setGenderValid(true);
      return;
    }
    setGenderValid(validateGender(gender));
  }, [gender, genderTouched]);

  useEffect(() => {
    if (!countryTouched && country === "") {
      setCountryValid(true);
      return;
    }
    setCountryValid(validateCountry(country));
  }, [country, countryTouched]);

  useEffect(() => {
    if (!agreedTouched && !agreed) {
      setAgreedValid(true);
      return;
    }
    setAgreedValid(validateAgreed(agreed));
  }, [agreed, agreedTouched]);

  const isFormValid = 
    nameValid && 
    genderValid && 
    countryValid && 
    agreedValid &&
    name.trim() !== "" &&
    gender !== "" &&
    country !== "" &&
    agreed;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setNameTouched(true);
    setGenderTouched(true);
    setCountryTouched(true);
    setAgreedTouched(true);

    if (isFormValid) {
      alert(`Thông tin đã được gửi!\nTên: ${name}\nGiới tính: ${gender}\nQuốc gia: ${country}\nĐồng ý điều khoản: ${agreed ? 'Có' : 'Không'}`);
      
      setName("");
      setGender("");
      setCountry("");
      setAgreed(false);
      setNameTouched(false);
      setGenderTouched(false);
      setCountryTouched(false);
      setAgreedTouched(false);
    }
  };

  return (
    <Container style={{ maxWidth: '600px', marginTop: '50px' }}>
      <Row>
        <Col>
          <h2>Form Đăng ký</h2>
          <Form onSubmit={handleSubmit}>
            {/* Textbox - Name */}
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Họ và tên *</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (!nameTouched) setNameTouched(true);
                }}
                onBlur={() => setNameTouched(true)}
                isValid={nameTouched && nameValid && name.trim() !== ""}
                isInvalid={nameTouched && !nameValid}
                placeholder="Nhập họ và tên"
              />
              <Form.Control.Feedback type="invalid">
                Tên phải có ít nhất 2 ký tự!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Tên hợp lệ!
              </Form.Control.Feedback>
            </Form.Group>

            {/* Radio Button - Gender */}
            <Form.Group className="mb-3">
              <Form.Label>Giới tính *</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  id="male"
                  label="Nam"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => {
                    setGender(e.target.value);
                    if (!genderTouched) setGenderTouched(true);
                  }}
                  isInvalid={genderTouched && !genderValid}
                />
                <Form.Check
                  type="radio"
                  id="female"
                  label="Nữ"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => {
                    setGender(e.target.value);
                    if (!genderTouched) setGenderTouched(true);
                  }}
                  isInvalid={genderTouched && !genderValid}
                />
                <Form.Check
                  type="radio"
                  id="other"
                  label="Khác"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => {
                    setGender(e.target.value);
                    if (!genderTouched) setGenderTouched(true);
                  }}
                  isInvalid={genderTouched && !genderValid}
                />
              </div>
              {genderTouched && !genderValid && (
                <div className="invalid-feedback d-block">
                  Vui lòng chọn giới tính!
                </div>
              )}
            </Form.Group>

            {/* Dropdown - Country */}
            <Form.Group controlId="country" className="mb-3">
              <Form.Label>Quốc gia *</Form.Label>
              <Form.Select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  if (!countryTouched) setCountryTouched(true);
                }}
                onBlur={() => setCountryTouched(true)}
                isValid={countryTouched && countryValid && country !== ""}
                isInvalid={countryTouched && !countryValid}
              >
                <option value="">Chọn quốc gia</option>
                <option value="vietnam">Việt Nam</option>
                <option value="usa">Hoa Kỳ</option>
                <option value="japan">Nhật Bản</option>
                <option value="korea">Hàn Quốc</option>
                <option value="china">Trung Quốc</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Vui lòng chọn quốc gia!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Quốc gia đã được chọn!
              </Form.Control.Feedback>
            </Form.Group>

            {/* Checkbox - Terms */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="terms"
                label="Tôi đồng ý với các điều khoản và điều kiện *"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (!agreedTouched) setAgreedTouched(true);
                }}
                isInvalid={agreedTouched && !agreedValid}
              />
              {agreedTouched && !agreedValid && (
                <div className="invalid-feedback d-block">
                  Bạn phải đồng ý với điều khoản để tiếp tục!
                </div>
              )}
            </Form.Group>

            {/* Submit Button */}
            <Button 
              variant="primary" 
              type="submit" 
              disabled={!isFormValid}
              className="w-100"
            >
              {isFormValid ? "Gửi thông tin" : "Vui lòng hoàn thành form"}
            </Button>
          </Form>

          {/* Form Status */}
          <div className="mt-3">
            <small className="text-muted">
              Trạng thái form: {isFormValid ? "✅ Sẵn sàng gửi" : "❌ Chưa hoàn thành"}
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CompleteForm;