import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Nav, Navbar, Container, Row, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../loginModal/LoginModal";
import Signup from "../SignUpModal/SignUp";
import { responseFacebook } from "../loginModal/LoginAPI";
import axios from 'axios'
import {useHistory, useParams, Link} from 'react-router-dom'

export default function CustomNavbar() {
  const [logged, setLogged] = useState("");
  const [token, setToken] = useState();
  const [user, setUser] = useState({});
  const history = useHistory()

  const show = useSelector((state) => state.showLogin);

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { showLogin: true } });
  };
  const handleSignup = () => {
    dispatch({ type: "SIGNUP", payload: { showSignup: true } });
  };

  const handleLogout = async () => {
    const res = await fetch(`http://localhost:5000/auth/logout`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (token) {
      localStorage.removeItem("token");
      history.replace("/")
    } else {
      console.log("dont mess with my app");
    }
    window.location.reload()
  }

  const getUserInfo = async () => {

    let token = localStorage.getItem("token");

    const data = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    setUser(data.data.data)
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getUserInfo();
  }, [show]);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/kennels">Kennels</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/dogcare">Health & Dog care</Nav.Link>
          </Nav>
          {token ? (
            <>
              <Dropdown>
                {user ? (
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    Hello, {user.name}
                  </Dropdown.Toggle>
                ) : (
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    Hello, user name
                  </Dropdown.Toggle>
                )}
                <Dropdown.Menu>
                  <Dropdown.Item><Link to={`/users/${user.id}`}>My profile</Link></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/*  */}
            </>
          ) : (
            <Nav>
              <Nav.Link onClick={handleLogin}>LOGIN</Nav.Link>
              <Nav.Link> | </Nav.Link>
              <Nav.Link onClick={handleSignup}>SIGN UP</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <LoginModal />
      <Signup />
    </div>
  );
}
