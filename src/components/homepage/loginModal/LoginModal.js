import React, { useEffect, useState } from "react";
import "./LoginModal.css";
import { useSelector, useDispatch } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Button, Modal, Col, Row } from "react-bootstrap";
import FacebookLogin from 'react-facebook-login'
import {responseFacebook} from "./LoginAPI"
import axios from 'axios'

export default function LoginModal() {

  const dispatch = useDispatch();
  const show = useSelector((state) => state.showLogin);
  const handleClose = () => {
    dispatch({ type: "LOGIN", payload: { showLogin: false} });
  }

  const handleFacebook = async (resp) => {
    if (resp && resp.accessToken) {
        console.log(resp.accessToken)
      const user = await responseFacebook(resp);
    //    localStorage.setItem('token', user.token)

      if (user instanceof Error) {
        console.log("Oops! Something happened")
        return
      }
    //   dispatch({ type: "USERLOADED", payload: { isUserLoaded: true } });
      dispatch({ type: "LOGIN", payload: { showLogin: false } });
    }
  }

  useEffect(() => {}, [show]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <div className="inside-modal">
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <form>
                    <div className="grey-text">
                      <MDBInput label="Type your email" icon="envelope" grouptype="email" validate error="wrong" success="right"/>
                      <MDBInput label="Type your password" icon="lock" group type="password" validate/>
                    </div>
                    <div className="text-center"><MDBBtn color="warning">Login</MDBBtn></div>
                    <div className="text-center grey-text forgot-password"><a href="#">Forgot password?</a></div>
                    <Row>
                        <Col sm={4} style={{padding: 0}}><hr></hr></Col>
                        <Col sm={4} className="or-login grey-text">or log in with</Col>
                        <Col sm={4} style={{padding: 0}}><hr></hr></Col>
                    </Row>
                    <Row className="fb-gg-btn">
                        <Col style={{padding: 0, textAlign:"center"}}>
                        <FacebookLogin
                            // cssClass="fb-gg-btn"
                            
                            autoLoad={false}
                            appId="4112733392131524"
                            fields="name,email,picture"
                            callback={(resp) => handleFacebook(resp)}
                            // icon={<i className="fab fa-facebook-f"></i>}
                            textButton="&nbsp;&nbsp;Facebook"
                        />
                        </Col>
                        <Col style={{padding: 0}}><MDBBtn color="primary">Google</MDBBtn></Col>
                    </Row>
                    <div className="text-center grey-text forgot-password">Need an account?  <a href="#">Sign up</a></div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer> */}
        </div>
      </Modal>
    </div>
  );
}
