import React, { Fragment, useEffect, useState } from "react";
import "./Breeds.css";
import { Row, Col, Button, Container, Card, Spinner } from "react-bootstrap";
import { MDBBtn, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

export default function Breeds() {
  // const [breedList, setBreedList] = useState([]);
  const [filterBtnBreed, setFilterBtnBreed] = useState([]);
  const [filterBreed, setFilterBreed] = useState([]);
  const [page, setPage] = useState(1);

  const getBreedList = async () => {
    console.log(`${process.env.REACT_APP_API_URL}/breeds/`);
    let data = await fetch(
      `${process.env.REACT_APP_API_URL}/breeds?page=${page}`
    );
    let result = await data.json();

    let set = new Set();
    for (let i = 0; i < result.data.length; i++) {
      if (
        result.data[i].breedGroup !== "" &&
        result.data[i].breedGroup !== undefined
      )
        set.add(result.data[i].breedGroup);
    }

    setFilterBtnBreed(Array.from(set));
    setFilterBreed(result.data);
  };

  const handleBtn = async (breedgroup) => {
    let data = await fetch(
      `${process.env.REACT_APP_API_URL}/search?breedgroup=${breedgroup}`
    );
    let result = await data.json();

    setFilterBreed(result.data);
    console.log(result);
  };

  const left = () => {
    setPage(page - 1);
  };

  const right = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getBreedList();
  }, [page]);

  // if(breedList === null){
  //   return(<div><Spinner animation="border" /></div>)
  // }

  return (
    <div className="body-breeds">
      <div className="top-section">
        <div className="find-your-dog">
          <h5>Find Your Perfect Dog Breed</h5>
          <Row className="search-section">
            <Col sm={1} className="icon">
              <i class="fas fa-search "></i>
            </Col>
            <Col sm={11}>
              <select class="mdb-select">
                <option value="" disabled selected>
                  By name
                </option>
                <option value="1">Pitbull</option>
                <option value="2">Chow Chow</option>
                <option value="3">Poodle</option>
              </select>
            </Col>
          </Row>
          <div className="button-section">
            <Button type="button" class="btn btn-warning">
              Collection
            </Button>
            <Button type="button" class="btn btn-warning">
              filter
            </Button>
          </div>
        </div>
      </div>
      <Container>
        <div className="middle-section">
          <h1
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
              color: "#505050",
              textAlign: "center",
            }}
          >
            Find The Right Dog Breed For You
          </h1>
          <Row>
            <Col>
              <Card style={{ width: "17rem" }}>
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
              <Card style={{ width: "17rem" }}>
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
              <Card style={{ width: "17rem" }}>
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
              <Card style={{ width: "17rem" }}>
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
        </div>
        <div className="filter-section">
          <h1
            style={{
              fontWeight: "bold",
              color: "#505050",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Filter Breeds
          </h1>
          <Row className="filter-row">
            <div className="filter">
              {filterBtnBreed.map((item) => {
                return (
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      class="btn btn-amber"
                      value={item}
                      onClick={() => handleBtn(item)}
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
            </div>
            <Col sm={2} className="filter">
              <a href="">Reset Filters (0)</a>
            </Col>
          </Row>
        </div>
        <div className="result-section">
          <Row>
            {filterBreed.map((item) => {
              return (
                <Col sm={3} className="result-items">
                  <Card>
                    <Card.Img
                      style={{ height: "200px" }}
                      variant="top"
                      src={item.image}
                    />
                    <Card.Body className="breed-name">
                      <Link
                        to="/breeds"
                        style={{ color: "darkgrey", fontWeight: "bolder" }}
                      >
                        {item.name}
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="pagination">
          {page === 1 ? (
            <Fragment>
              <MDBBtn color="amber" onClick={right}>
                Right
                <MDBIcon icon="angle-right" className="ml-5" />
              </MDBBtn>
            </Fragment>
          ) : (
            <Fragment>
              <MDBBtn color="amber" onClick={left}>
                <MDBIcon icon="angle-left" className="mr-5" />
                Left
              </MDBBtn>
              <MDBBtn color="amber" onClick={right}>
                Right
                <MDBIcon icon="angle-right" className="ml-5" />
              </MDBBtn>{" "}
            </Fragment>
          )}
        </div>
      </Container>
    </div>
  );
}
