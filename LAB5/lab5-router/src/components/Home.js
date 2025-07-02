import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const bannerImages = [
  { src: '/images/banner.jpg', title: 'This is Home Page' },
  { src: '/images/banner2.jpg'},
  { src: '/images/banner3.jpg' }
];
const circularImages = [
    'images/event1.jpg',
    'images/event2.jpg',
    'images/event3.jpg',
    'images/event4.jpg',
    'images/event5.jpg',
    'images/event6.jpg'
  ];
const Home = () => {
  return (
    <>
      {/* Hero Banner Section with Carousel */}
      <div className="position-relative w-100">
        <Carousel>
          {bannerImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                src={img.src}
                alt={img.title}
                className="img-fluid w-100"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                  {img.title}
                </h1>
                <p>{img.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Container className="my-5 text-center">
        <h2 className="text-danger mb-4">This is Home Page</h2>
        <Row className="justify-content-center g-4">
          {circularImages.map((src, idx) => (
            <Col key={idx} xs={6} sm={4} md={2}>
              <div
                // className="rounded-circle overflow-hidden mx-auto" tròn
                className="border overflow-hidden mx-auto"
                style={{
                  width: '100px',
                  height: '100px',
                }}
              >
                <img
                  src={src}
                  // alt={`circle-${idx}`} tròn
                   alt={`square-${idx}`}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
          ))}
        </Row>
          <Container className="text-center">
          <Link to="/quiz" className="btn btn-primary m-2">Take a Quiz</Link>
          <Link to="/news" className="btn btn-outline-danger m-2">See News</Link>
          
        </Container>
      </Container>
    </>
  );
};

export default Home;