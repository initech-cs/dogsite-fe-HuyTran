import React from "react";
import {
  Carousel,
  Row,
  Col,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./jumbotron.css";

export default function jumbotron() {
  return (
    <div>
      {/* -------------------------------JUMBOTRON 1------------------------------- */}
      <Row id="hello">
        <Col sm={7} xs={12} className="img">
          <img
            src="https://images8.alphacoders.com/375/thumb-1920-375995.jpg"
            alt="First"
            width="100%"
          />
        </Col>
        <Col sm={5} xs={12} className="column">
          <div className="right-column">
            <p className="jumboh1">Whether</p>
            <p className="jumboh2">
              Big <span style={{ color: "#FFC800" }}>or</span> Small
            </p>
            <p className="jumboh1">We have them all</p>
            <a href="#our-breeds" class="btn">
              view all breeds
            </a>
          </div>
        </Col>
      </Row>
      {/* -------------------------------JUMBOTRON 2------------------------------- */}
      <Row id="welcome">
        <Container>
          <div className="section-title">
            <h1 className="title">
              Welcome to <span>Tindog</span>
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
                    <img src="./images/1.png" alt="dog" />
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
                  <img src="./images/2.png" alt="dog" /></a>
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
                  <img src="./images/3.png" alt="dog" /></a>
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
                  <img src="./images/4.png" alt="dog" /></a>
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
            <h1 className="title" style={{color: "white"}}>
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
            <h1 className="title">Our Breeds</h1>
            <h2 className="sub-title">
              ALL OUR DOGS ARE <span>WELL FED & CARED FOR</span>
            </h2>
          </Col>
          <Col sm={12}className="filter-button">
            <a href="#our-breeds" class="btn">All</a>
            <a href="#our-breeds" class="btn">Small</a>
            <a href="#our-breeds" class="btn">Medium</a>
            <a href="#our-breeds" class="btn">Large</a>
          </Col>
              <Row>
            <Col xs={6} className="breed-item">
              <div className="breed">
                <Col sm={6} className="breed-photo">
                  <img src="./images/1.jpg" alt="breed"/>
                </Col>
                <Col sm={6} className="breed-info">
                  <h3 className="breed-name">German Shepherd</h3>
                  <ul className="breed-desc">
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                  </ul>
                </Col>
              </div>
            </Col>
            <Col xs={6} className="breed-item">
              <div className="breed">
                <Col sm={6} className="breed-photo">
                  <img src="images/1.jpg" alt="breed"/>
                </Col>
                <Col sm={6} className="breed-info">
                  <h3 className="breed-name">German Shepherd</h3>
                  <ul className="breed-desc">
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                    <li>Ease of training<span><strong>10</strong> / 10</span></li>
                  </ul>
                </Col>
              </div>
            </Col>
            </Row>
            <Col sm={12} style={{textAlign:"center"}} ><Button className="view-more">View more</Button></Col>
           
        </Container>
      </Row>
    </div>
  );
}
