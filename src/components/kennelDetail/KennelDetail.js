import React from "react";
import "./KennelDetail.css";
import { Container, Carousel } from "react-bootstrap";
export default function KennelDetail() {
  return (
    <div className="">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.gettyimages.com/photos/argo-picture-id988274900?s=2048x2048"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.gettyimages.com/photos/two-pit-bulls-picture-id511504964?s=2048x2048"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.gettyimages.com/photos/man-kissing-his-furry-best-friend-picture-id675379758?s=2048x2048"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

    </div>
  );
}
