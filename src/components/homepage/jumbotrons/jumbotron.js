import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "./jumbotron.css";

export default function jumbotron() {

  return (
    <div>
        <Row>
          <Col sm={7} xs={12} className="img">
          <Carousel>
            <Carousel.Item>
            <img
              src="https://images8.alphacoders.com/375/thumb-1920-375995.jpg"
              alt="First"
              width="100%"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
              src="https://images8.alphacoders.com/375/thumb-1920-375995.jpg"
              alt="Second"
              width="100%"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
              src="https://images8.alphacoders.com/375/thumb-1920-375995.jpg"
              alt="Third"
              width="100%"
            />
            </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={5} xs={12} className="column">
            <div className="right-column">
              <h1>Whether</h1>
              <h2>
                Big <span style={{ color: "#FFC800" }}>or</span> Small
              </h2>
              <h1>We have them all</h1>
              <a href="#our-breeds" class="btn">
                view all breeds
              </a>
            </div>
          </Col>
        </Row>
    </div>
  );
}
