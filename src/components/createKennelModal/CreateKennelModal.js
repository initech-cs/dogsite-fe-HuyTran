import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function CreateKennelModal() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [since, setSince] = useState('')
  const [breeds, setBreeds] = useState('')
  const [images, setImages] = useState('')
  const [slogan, setSlogan] = useState('')
  const [desc, setDesc] = useState('')
  const [city, setCity] = useState('')

  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCreateKennel);

  const closeModal = () => {
    dispatch({ type: "C-KENNEL", payload: { showCreateKennel: false } });
  };

  const createKennel = async () => {
    const kennel = {
      email,
      name,
      phone,
      since,
      images,
      slogan,
      desc,
      city,
      breeds,
    };

    let token = localStorage.getItem("token")

    const newKennel = await axios.post(`${process.env.REACT_APP_API_URL}/kennels`, kennel, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    dispatch({ type: "C-KENNEL", payload: { showCreateKennel: false } });
  };

  useEffect(() => {
    createKennel()
  },[])


  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Body>
          <p class="h4 mb-4">Add new Kennel</p>
          <Form>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="name">Name</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /></Col>
            </Row>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="phone">Phone</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="email" id="defaultRegisterFormEmail">Email</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="text" value={email} onChange={(e) => setEmail(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="since">Since</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="text" value={since} onChange={(e) => setSince(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="breeds">Breeds</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="text" value={breeds} onChange={(e) => setBreeds(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="slogan">Slogan</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="text" value={slogan} onChange={(e) => setSlogan(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="city">City</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="text" value={city} onChange={(e) => setCity(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="description">Description</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/><br /></Col>
            </Row>
            <Row>
              <Col sm={2} style={{textAlign:"left"}}><label htmlFor="images">Images</label></Col>
              <Col sm={10}><input style={{width:"100%"}} type="file" value={images} onChange={(e) => setImages(e.target.value)}/><br /></Col>
            </Row>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={closeModal}>
            Close
          </Button>
          <Button variant="warning" type="submit" onClick={createKennel}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
