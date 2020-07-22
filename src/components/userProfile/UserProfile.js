import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { Container, Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function UserProfile() {
  const [kennels, setKennels] = useState([]);
  const [user, setUser] = useState({});

  const {userId} = useParams()

  const show = useSelector((state) => state.showCreateKennel);

  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: "C-KENNEL", payload: { showCreateKennel: true } });
  };

  const getKennelList = async () => {
    let data = await fetch(`${process.env.REACT_APP_API_URL}/kennels`);
    let result = await data.json();
    setKennels(result.data);
  };

  // const getSingleUser = async() => {
  //   let data = await fetch(`${process.env.REACT_APP_API_URL}/users/me`)
  //   let result = await data.json()

  //   setUser(result)
  // }

  const getUserInfo = async () => {
    let token = localStorage.getItem("token")

    const data = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    setUser(data.data.data)
  }

  useEffect(() => {
    getKennelList();
    getUserInfo();
    // getSingleUser()
  }, [show])

  return (
    <div className="user-profile-body">
      <Container>
        <Row className="header-section">
          <Col sm={2} className="user-picture">
            <div className="img"></div>
          </Col>
          {user ? (
            <Col sm={10} className="user-info">
              <div>
                <h4>{user.name}</h4>
                <h6>{user.phone} </h6>
                <h6>{user.email}</h6>
              </div>
              <div>Upload Image</div>
            </Col>
          ) : (
            <Col sm={10} className="user-info">
              <div>
                <h4>UserName</h4>
                <h6>City</h6>
                <h6>Country</h6>
              </div>
              <div>Upload Image</div>
            </Col>
          )}

          <Col sm={12} className="user-edit">
            <MDBBtn>Inbox</MDBBtn>
            <MDBBtn
              data-toggle="modal"
              data-target="#fullHeightModalRight"
              onClick={openModal}
            >
              Create Kennel
            </MDBBtn>
            <MDBBtn>Share</MDBBtn>
          </Col>
        </Row>

        <Row className="body-section">
          <Col sm={8} style={{ paddingLeft: "0" }}>
            <div className="info-left">
              <div className="search-top">
                <p>
                  <strong>List of my kennels</strong>
                </p>
              </div>
              <div className="table">
                <Row className="title">
                  <Col sm={4}>KENNELS</Col>
                  <Col sm={2}>DOG LIST</Col>
                  <Col sm={3}>CITY</Col>
                  <Col sm={3}>CONTACT</Col>
                </Row>
                {user.kennels ? (
                  user.kennels.map((item) => {
                    console.log(item._id);
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
                          <a>HCM city</a>
                        </Col>
                        <Col sm={3} className="kennel-contact">
                          <a>{item.phone}</a>
                        </Col>
                      </Row>
                    );
                  })
                ) : (
                  <div>Not have Kennel</div>
                )}
              </div>
            </div>
          </Col>
          {user ? (
            <Col sm={4} className="about">
              <h4>
                <strong>About</strong>
              </h4>
              <div className="info">
                <p>
                  <strong>Gender</strong>: {user.gender}
                </p>
                <p>
                  <strong>Age</strong>: {user.age}
                </p>
                <p>
                  <strong>Email</strong>: {user.email}
                </p>
                <p>
                  <strong>Phone</strong>: {user.phone}
                </p>
                <p>
                  <strong>Address</strong>: {user.address}
                </p>
                <p>
                  <strong>Relationship </strong>: {user.relationship}
                </p>
                <p>
                  <strong>Interested In</strong>: {user.interestedIn}
                </p>
                <p>
                  <strong>City</strong>: {user.city}
                </p>
                <p>
                  <strong>Country</strong>: {user.country}
                </p>
              </div>
            </Col>
          ) : (
            <Col sm={4} className="about">
              <h4>
                <strong>About</strong>
              </h4>
              <div className="info">
                <p>
                  <strong>Gender</strong>: Male
                </p>
                <p>
                  <strong>Age</strong>: 20
                </p>
                <p>
                  <strong>Email</strong>: Single
                </p>
                <p>
                  <strong>Phone</strong>: 06465
                </p>
                <p>
                  <strong>Address</strong>: fhidshakdsja
                </p>
                <p>
                  <strong>Relationship </strong>: Married
                </p>
                <p>
                  <strong>Interested In</strong>: Male
                </p>
                <p>
                  <strong>City</strong>: HCM
                </p>
                <p>
                  <strong>Country</strong>: VietNam
                </p>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
