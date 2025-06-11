import "./App.css";
import React from "react";
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import NameList from "./components/NameList";
import StudentCard from "./components/StudentCard";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const userData = { name: "Nguyễn Tiến Đạt", age: 21 };
  const namesList = ["datntde180599@fpt.edu.vn", "test@fe.edu.vn"];

  const students = [
    { name: "Nguyễn Đại Đức", age: 21, avatar: "/images/duc.jpg" },
    { name: "Nguyễn Văn Hoàng Long", age: 21, avatar: "/images/long.jpg" },
    { name: "Đinh Xuân Thịnh", age: 21, avatar: "/images/thinh.jpg" },
  ];

  return (
    <>
      <Welcome name="datntde180599@fpt.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />

      <Container>
        <h1 className="my-4 text-center">Student Information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
