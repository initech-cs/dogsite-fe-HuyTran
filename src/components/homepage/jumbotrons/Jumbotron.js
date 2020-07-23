import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormControl,
  Button,
  FormGroup,
  Carousel,
} from "react-bootstrap";

import { useParams, Link } from "react-router-dom";

import "./Jumbotron.css";

export const Jumbotron = () => {
  const { kennelId } = useParams(); // id = :id (app.js)
  const [kennel, setKennel] = useState({});

  const getKennel = async (id) => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/kennels/${id}`);
    const result = await data.json();
    console.log(result.data)
    setKennel(result.data);
  };

  useEffect(() => {
    getKennel(kennelId);
  }, []);

  return (
    <div>
      {/* -------------------------------JUMBOTRON 1------------------------------- */}
      <Row id="hello">
        <Col sm={12} xs={12} className="img">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={kennel.images} />{" "}
            </Carousel.Item>
          </Carousel>
        </Col>
        {/* <Col sm={5} xs={12} className="column">
          <div className="right-column">
            <p className="jumboh1">Whether</p>
            <p className="jumboh2">
              Big <span style={{ color: "#FFC800" }}>or</span> Small
            </p>
            <p className="jumboh1">We have them all</p>
            <a href="#our-breeds" className="btn">
              view all breeds
            </a>
          </div>
        </Col> */}
      </Row>
      {/* -------------------------------JUMBOTRON 2------------------------------- */}
      <Row id="welcome">
        <Container>
          <div className="section-title">
            <h1 className="title">
              Welcome to <span>{kennel.name}</span>
            </h1>
            <h2 className="sub-title">
              WE RAISE & BREEDING OVER <span>80 DOG BREEDS</span>
            </h2>
          </div>
          <Row>
            <Col md={3} sm={6}>
              <div className="product">
                <div className="product-image">
                  <a href="#">
                    <img
                      src="http://demo.lemonthemes.com/joffrey/supernova/images/product/1.png"
                      alt="dog"
                    />
                  </a>
                </div>
                <div className="product-info">
                  <h2>Small</h2>
                  <span>Breeds</span>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="product">
                <div className="product-image">
                  <a href="#">
                    <img
                      src="http://demo.lemonthemes.com/joffrey/supernova/images/product/2.png"
                      alt="dog"
                    />
                  </a>
                </div>
                <div className="product-info">
                  <h2>Medium</h2>
                  <span>Breeds</span>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="product">
                <div className="product-image">
                  <a href="#">
                    <img
                      src="http://demo.lemonthemes.com/joffrey/supernova/images/product/3.png"
                      alt="dog"
                    />
                  </a>
                </div>
                <div className="product-info">
                  <h2>Large</h2>
                  <span>Breeds</span>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="product">
                <div className="product-image">
                  <a href="#">
                    <img
                      src="http://demo.lemonthemes.com/joffrey/supernova/images/product/4.png"
                      alt="dog"
                    />
                  </a>
                </div>
                <div className="product-info">
                  <h2>Unique</h2>
                  <span>Breeds</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
      {/* -------------------------------JUMBOTRON 3------------------------------- */}
      <Row id="newsletter">
        <Container>
          <Col lg={12} className="section-title">
            <h1 className="title" style={{ color: "white" }}>
              Subscribe to our <span>Newsletter</span>
            </h1>
          </Col>
          <Form inline style={{ justifyContent: "center" }}>
            <FormControl
              type="text"
              placeholder="Your email address"
              className="mr-sm-2"
              style={{ width: "500px", height: "70px" }}
            />
            <Button
              className="btn"
              style={{
                width: "150px",
                height: "70px",
                fontSize: "25px",
                fontWeight: "600",
                borderRadius: "5px",
              }}
            >
              GO
            </Button>
          </Form>
        </Container>
      </Row>
      {/* -------------------------------JUMBOTRON 4------------------------------- */}
      <Row id="our-breeds">
        <Container>
          <Col sm={12} className="section-title">
            <h1 className="title">Our Purebreds</h1>
            <h2 className="sub-title">
              ALL OUR DOGS ARE <span>WELL FED & CARED FOR</span>
            </h2>
          </Col>
          <Col sm={12} className="filter-button">
            <a href="#our-breeds" className="btn">
              All
            </a>
            <a href="#our-breeds" className="btn">
              Small
            </a>
            <a href="#our-breeds" className="btn">
              Medium
            </a>
            <a href="#our-breeds" className="btn">
              Large
            </a>
          </Col>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {kennel.purebreds ? (
              kennel.purebreds.map((item) => {
                return (
                  <Col sm={6} style={{ display: "flex", marginBottom: "20px" }}>
                    <Col sm={6} className="breed-photo">
                      <Link to={`/kennels/${kennelId}/purebreds`}>
                        <img
                          src={item.images}
                          alt="breed"
                          style={{ maxWidth: "400px" }}
                        />
                      </Link>
                    </Col>
                    <Col sm={6} className="breed-info">
                      <h3 className="breed-name">{item.name}</h3>
                      <ul className="breed-desc">
                        <li>
                          Name:
                          <span>{item.name}</span>
                        </li>
                        <li>
                          Breed:
                          <span>{item.breed}</span>
                        </li>
                        <li>
                          Age:
                          <span>{item.age}</span>
                        </li>
                        <li>
                          Height:
                          <span>{item.height}</span>
                        </li>
                        <li>
                          Weight:
                          <span>{item.weight}</span>
                        </li>
                        <li>
                          Litter:
                          <span>{item.litter}</span>
                        </li>
                        <li>
                          Price:
                          <span>{item.price}</span>
                        </li>
                        <li>
                          Gender:
                          <span>{item.gender}</span>
                        </li>
                      </ul>
                    </Col>
                  </Col>
                );
              })
            ) : (
              <div>Not have purebred</div>
            )}
          </div>

          <Col sm={12} style={{ textAlign: "center" }}>
            <Link to={`/kennels/${kennelId}/purebreds`}><Button className="view-more">View more</Button></Link>
          </Col>
        </Container>
      </Row>
      {/* -------------------------------JUMBOTRON 4------------------------------- */}
      <Row id="breeders">
        <Container>
          <Col sm={12} className="section-title">
            <h1 className="title">Best Breeders</h1>
            <h2 className="sub-title">
              HIGLY <span>TRAINED & PASSIONATE </span>PERSONNEL
            </h2>
          </Col>
          <Row>
            <Col md={3} sm={6}>
              <div className="section-breeder">
                <div className="breeder-image">
                  <a href="#">
                    <img
                      src="http://demo.lemonthemes.com/joffrey/supernova/images/staff/1.jpg"
                      alt="breeder"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
                <div className="breeder-info">
                  <h2>Teepit</h2>
                  <span>Trainer</span>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="section-breeder">
                <div className="breeder-image">
                  <a href="#">
                    <img
                      src="http://demo.lemonthemes.com/joffrey/supernova/images/staff/2.jpg"
                      alt="breeder"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
                <div className="breeder-info">
                  <h2>Teepit</h2>
                  <span>Trainer</span>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="section-breeder">
                <div className="breeder-image">
                  <a href="#">
                    <img
                      src="http://demo.lemonthemes.com/joffrey/supernova/images/staff/3.jpg"
                      alt="breeder"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
                <div className="breeder-info">
                  <h2>Teepit</h2>
                  <span>Trainer</span>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="section-breeder">
                <div className="breeder-image">
                  <a href="#">
                    <img
                      src="http://demo.lemonthemes.com/joffrey/supernova/images/staff/4.jpg"
                      alt="breeder"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
                <div className="breeder-info">
                  <h2>Teepit</h2>
                  <span>Trainer</span>
                </div>
              </div>
            </Col>
          </Row>
          <Col sm={12} xs={12} style={{ textAlign: "center" }}>
            <Button className="view-more">View more</Button>
          </Col>
        </Container>
      </Row>
      {/* -------------------------------JUMBOTRON 4------------------------------- */}
      <Row id="get-in-touch">
        <Container>
          <div className="section-title">
            <h1>Get in Touch</h1>
            <h2 className="sub-title">
              let’s get to know <span>each other</span>
            </h2>
          </div>

          <Row>
            <Col xs={12}>
              <Form
                id="contact-form"
                className="contact-form"
                name="contact-form"
                method="post"
                action="#"
              >
                <Row>
                  <FormGroup className="col-sm-6">
                    <Form.Control
                      type="text"
                      id="name"
                      name="name"
                      required="required"
                      placeholder="Your Name"
                       
                    />
                    <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      required="required"
                      placeholder="Your Email Address"
                   
                    />
                    <Form.Control
                      type="text"
                      id="subject"
                      name="subject"
                      required="required"
                      placeholder="Your Subject"
                   
                    />
                  </FormGroup>
                  <FormGroup className="col-sm-6">
                    <Form.Control
                      as="textarea"
                      name="message"
                      id="message"
                      required="required"
                      placeholder="Your message"
                      style={{ minHeight: "275px", paddingTop: "15px" }}
                    />
                  </FormGroup>

                  <FormGroup
                    className="col-sm-12"
                    style={{ textAlign: "center" }}
                  >
                    {/* <h1 class="thank-you"><span>Thank you! Your mail has been sent!</span></h1>*/}
                    <Button
                      className="view-more"
                      type="submit"
                    
                    >
                      Submit Message
                    </Button>
                  </FormGroup>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
};

export default Jumbotron;
