import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateUserModal() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [relationship, setRelationship] = useState('')
  const [interestedIn, setInterestedIn] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState('')
  const [avatar, setAvatar] = useState('')
  const [gender, setGender] = useState('')

const {userId} = useParams()

  const dispatch = useDispatch();
  const show = useSelector((state) => state.showUpdateUser);

  const closeModal = () => {
    dispatch({ type: "UPDATE", payload: { showUpdateUser: false } });
  };

  const updateUser = async () => {
    let user = {
      name,
      phone,
      password,
      relationship,
      interestedIn,
      country,
      city,
      address,
      age,
      avatar,
      gender
    }

    let token = localStorage.getItem("token")

    let newUser = await axios.patch(`${process.env.REACT_APP_API_URL}/users/me`, user, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    // console.log(newUser)
    dispatch({ type: "UPDATE", payload: { showUpdateUser: false } });
  };

  useEffect(() => {
    updateUser(userId)
  },[])


  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Body>
          <p class="h4 mb-4">Update my profile</p>
          <Form>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="name">Name</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="phone">Phone</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="password">Password</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={password} onChange={(e) => setPassword(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="city">City</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={city} onChange={(e) => setCity(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="relationship">Relationship</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={relationship} onChange={(e) => setRelationship(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="interestedIn">Interested In</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={interestedIn} onChange={(e) => setInterestedIn(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="country">Country</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={country} onChange={(e) => setCountry(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="age">Age</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={age} onChange={(e) => setAge(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="address">Address</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={address} onChange={(e) => setAddress(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="avatar">Avatar</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="file" value={avatar} onChange={(e) => setAvatar(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign:"left"}}><label htmlFor="gender">Gender</label></Col>
              <Col sm={9}><input style={{width:"100%"}} type="text" value={gender} onChange={(e) => setGender(e.target.value)}/><br /></Col>
            </Row>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={closeModal}>
            Close
          </Button>
          <Button variant="warning" type="submit" onClick={updateUser}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
