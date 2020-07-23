import React, { useState, useEffect } from "react";
import "./Purebred.css";
import {
  Container,
  Row,
  Carousel,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Purebred() {
  const [purebredList, setPurebredList] = useState([]);
  const id = useParams().kennelId;

  const getPurebredList = async (kennelId) => {
    let data = await fetch(
      `${process.env.REACT_APP_API_URL}/kennels/${kennelId}/purebred`
    );
    let result = await data.json();
    setPurebredList(result.data);
  };

  useEffect(() => {
    getPurebredList(id);
  }, []);

  return (
    <div style={{ backgroundColor: "#efeef1", padding: "50px 0 50px 0" }}>
      <Container>
        {purebredList.map((item) => {
          return (
            <Row className="purebred">
              <Row style={{ marginBottom: "20px" }}>
                <Col sm={4} style={{ display: "flex", alignItems: "center" }}>
                  <div className="img-purebred">
                    <img
                      className="d-block w-100"
                      src={item.images}
                      alt="dog"
                    />
                  </div>
                </Col>
                <Col sm={4}>
                  <h4 style={{ fontWeight: "bold", letterSpacing: "1px" }}>
                    TEEPIT KENNEL{" "}
                  </h4>
                  <Row className="info-purebred">
                    <Col sm={3}>
                      <p>
                        <strong>Name:</strong>
                      </p>
                      <p>
                        <strong>Breed:</strong>
                      </p>
                      <p>
                        <strong>Age:</strong>
                      </p>
                      <p>
                        <strong>Height:</strong>
                      </p>
                      <p>
                        <strong>Weight:</strong>
                      </p>
                      <p>
                        <strong>Litter:</strong>
                      </p>
                      <p>
                        <strong>Gender:</strong>
                      </p>
                      <p>
                        <strong>Price:</strong>
                      </p>
                      <p>
                        <strong>Rating:</strong>
                      </p>
                    </Col>
                    <Col sm={9}>
                      <p>{item.name}</p>
                      <p>{item.breed}</p>
                      <p>{item.age} years old</p>
                      <p>{item.height} cm</p>
                      <p>{item.weight} kg</p>
                      <p>{item.litter} litters</p>
                      <p>{item.gender}</p>
                      <p>$ {item.price}</p>
                      <p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4}>
                  <div className="rate">
                    <h4 style={{ fontWeight: "bold", letterSpacing: "1px" }}>
                      Rate:
                    </h4>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>

                  <Row>
                    <Col>
                      <p>
                        <strong>Description:</strong> {item.desc}.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="puppies">
                <Col sm={12}>
                  <h1
                    style={{
                      fontWeight: "bold",
                      marginBottom: "30px",
                      color: "#505050",
                    }}
                  >
                    {item.name}'s puppies
                  </h1>
                </Col>
                {item.puppyImages.map((e) => {
                  return (
                    <Row>
                      <Col sm={3}>
                        <Card style={{ width: "16rem" }}>
                          <Card.Img
                            style={{ height: "12rem" }}
                            variant="top"
                            src={e}
                          />
                          {/* <Card.Body className="title-body">
                          <Card.Title className="title">{item.name}'s puppies</Card.Title>
                        </Card.Body> */}
                        </Card>
                      </Col>
                    </Row>
                  );
                })}
              </Row>
            </Row>
          );
        })}

        <Row className="comment">
          <Col sm={8}>
            <div className="left-column">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2">
                      <img
                        src="https://image.ibb.co/jw55Ex/def_face.jpg"
                        class="img img-rounded img-fluid"
                      />
                      <p class="text-secondary text-center">15 Minutes Ago</p>
                    </div>
                    <div class="col-md-10">
                      <p>
                        <a
                          class="float-left"
                          href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                        >
                          <strong>Customer</strong>
                        </a>
                        <span class="float-right">
                          <i class="text-warning fa fa-star"></i>
                        </span>
                        <span class="float-right">
                          <i class="text-warning fa fa-star"></i>
                        </span>
                        <span class="float-right">
                          <i class="text-warning fa fa-star"></i>
                        </span>
                        <span class="float-right">
                          <i class="text-warning fa fa-star"></i>
                        </span>
                      </p>
                      <div class="clearfix"></div>
                      <p>
                        I've bought 2 pups from Teepit Kennel. Now I'm going to
                        buy another one because I really like the way this
                        kennel served. Thank you for all.
                      </p>
                      <p>
                        <a class="float-right btn text-white btn-warning">
                          {" "}
                          <i class="fa fa-heart"></i> Like
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="textbox">
                <Form.Group>
                  <Form.Label for="exampleFormControlTextarea6">
                    <strong>Your Comment: </strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    id="exampleFormControlTextarea6"
                    placeholder="Write something here..."
                  ></Form.Control>
                  <div style={{ textAlign: "right" }}>
                    <Button className="comment-btn">Comment</Button>
                  </div>
                </Form.Group>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <form
              class="text-center contact-form-purebred border-light p-5"
              action="#!"
            >
              <p class="h4 mb-4">Contact us</p>

              <input
                type="text"
                id="defaultContactFormName"
                class="form-control mb-4"
                placeholder="Name"
              />

              <input
                type="email"
                id="defaultContactFormEmail"
                class="form-control mb-4"
                placeholder="E-mail"
              />

              <label class="h4 mb-4">Subject</label>
              <select class="browser-default custom-select mb-4">
                <option value="" disabled>
                  Choose option
                </option>
                <option value="1" selected>
                  Feedback
                </option>
                <option value="2">Health</option>
                <option value="3">Service</option>
                <option value="4">Need helps</option>
              </select>

              <div class="form-group">
                <textarea
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div class="custom-control custom-checkbox mb-4">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultContactFormCopy"
                />
                <label
                  class="custom-control-label"
                  for="defaultContactFormCopy"
                >
                  Send me a copy of this message
                </label>
              </div>

              <button class="btn btn-warning btn-block" type="submit">
                Send
              </button>
            </form>
          </Col>
        </Row>
        {/* <Row className="contact">
          <Col sm={12}>
            <div className="contact-map">
            
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}
