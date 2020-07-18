import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Nav, Navbar, Container, Row, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import LoginModal from "../loginModal/LoginModal";
import Signup from "../SignUpModal/SignUp"

export default function CustomNavbar() {

  const [token, setToken] = useState("");
  
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { showLogin: true } });
  };

  const handleLogout = async () => {
    const res = await fetch(`http://localhost:5000/auth/logout`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (res.ok) {
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT", payload: {} });
      // setUser(null)
    } else {
      console.log("dont mess with my app");
    }
  };

  const handleSignup = () => {
    dispatch({ type: "SIGNUP", payload: {showSignup: true}})
  }

  // const fetchUser = async () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     return;
  //   }
  
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     return res.data;
  //   } catch (error) {
  //     localStorage.removeItem("token");
  //   }
  // }
  
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
            <Nav>
              <Nav.Link onClick={handleLogout}> Logout </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link onClick={handleLogin}>
                LOGIN
              </Nav.Link>
              <Nav.Link> | </Nav.Link>
              <Nav.Link onClick={handleSignup}>SIGN UP</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <LoginModal />
      <Signup/>
    </div>
  );
}
