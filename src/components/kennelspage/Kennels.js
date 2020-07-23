import React, { useState, useEffect } from "react";
import "./Kennels.css";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBInput, MDBBtn } from "mdbreact";

export default function Kennels() {
  const [kennels, setKennels] = useState([]);
  const [searchName, setSearchName] = useState("");

  const getKennelList = async () => {
    let data = await fetch(`${process.env.REACT_APP_API_URL}/kennels`);
    let result = await data.json();
    setKennels(result.data);
  };

  const searchList = async () => {
    let data = await fetch(`${process.env.REACT_APP_API_URL}/kennels?search=${searchName}`);
    let result = await data.json();
  };
  searchList();

  useEffect(() => {
    getKennelList();
    // getPurebredList()
  }, []);

  return (
    <div className="body-kennel">
      <Container>
        <div className="normal-kennel">
          <h1>
            The most famous sire <a>&</a> lady
          </h1>
          <Row>
            <Col>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  style={{ height: "12rem" }}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpg2whs_hG7nQK0WzVkfoW-S0odw31TAnVZg&usqp=CAU"
                />
                <Card.Body className="title-body">
                  <Card.Title className="title">Short Haired Dogs</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  style={{ height: "12rem" }}
                  variant="top"
                  src="https://www.loveyourdog.com/wp-content/uploads/2019/04/Toy-Poodle-900x500.jpg"
                />
                <Card.Body className="title-body">
                  <Card.Title className="title">Top 5 smartest Dogs</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  style={{ height: "12rem" }}
                  variant="top"
                  src="https://thepettown.com/wp-content/uploads/2017/08/pitbull2.jpg"
                />
                <Card.Body className="title-body">
                  <Card.Title className="title">Muscle Dogs</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  style={{ height: "12rem" }}
                  variant="top"
                  src="https://cdn.akc.org/content/hero/chow_chow_bod_hero.jpg"
                />
                <Card.Body className="title-body">
                  <Card.Title className="title">Cute Dogs</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h1>Top 5 rating</h1>
        </div>
        <Row className="search-kennel">
          <Col sm={8}>
            <div className="info-left">
              <Row>
                <Col sm={12}>
                  <h4>Search kennels by Distance:</h4>
                </Col>
              </Row>
              <Row>
                <Col sm={6} style={{ paddingRight: "5px" }}>
                  <MDBInput className="input" label="Location" />
                </Col>
                <Col sm={6} style={{ paddingLeft: "5px" }}>
                  <MDBInput
                    onChange={(e) => setSearchName(e.target.value)}
                    className="input"
                    label="Kennel name"
                  />
                </Col>
              </Row>
              <div className="search-top">
                <p>Search by state</p>
                <MDBBtn color="warning" onClick={searchList}>Search</MDBBtn>
              </div>
              <div className="table">
                <Row className="title">
                  <Col sm={4}>KENNELS</Col>
                  <Col sm={2}>DOG LIST</Col>
                  <Col sm={3}>CITY</Col>
                  <Col sm={3}>CONTACT</Col>
                </Row>

                {kennels.map((item) => {
                  return (
                    <Row className="content">
                      <Col
                        sm={4}
                        className="kennel-name"
                        style={{ paddingLeft: "0" }}
                      >
                        <Link to={`/kennels/${item._id}`}>{item.name}</Link>
                      </Col>
                      <Col sm={2}>
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </Col>
                      <Col sm={3} className="kennel-city">
                        <Link to="">HCM city</Link>
                      </Col>
                      <Col sm={3} className="kennel-contact">
                        <Link to="">{item.phone}</Link>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            </div>
          </Col>

          {/* <Col sm={1}></Col> */}
          <Col sm={4}>
            <div className="search-right">
              <h4 style={{ fontSize: "23px", color: "#4D4751" }}>
                Find Kennel name
              </h4>
              <MDBInput className="input" label="Location" />
              <MDBInput className="input" label="Kennel name" />
              <MDBBtn color="warning">Search</MDBBtn>
              <div className="or">
                <Col sm={5} style={{ padding: 0 }}>
                  <hr></hr>
                </Col>
                <Col sm={2} className="or-login grey-text">
                  OR
                </Col>
                <Col sm={5} style={{ padding: 0 }}>
                  <hr></hr>
                </Col>
              </div>
              <p>LIST BY CITY</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
