import React, {Fragment} from 'react'
import "./Breeds.css"
import {Row, Col, Button, Container, Card} from 'react-bootstrap'
import { MDBBtn, MDBIcon } from "mdbreact"

export default function Breeds() {
    return (
        <div className="body-breeds">
            <div className="top-section">
                <div className="find-your-dog">
                    <h5>Find Your Perfect Dog Breed</h5>
                    <Row className="search-section">
                        <Col sm={1} className="icon"><i class="fas fa-search "></i></Col>
                        <Col sm={11}>
                            <select class="mdb-select">
                                <option value="" disabled selected>By name</option>
                                <option value="1">Pitbull</option>
                                <option value="2">Chow Chow</option>
                                <option value="3">Poodle</option>
                            </select>
                        </Col>
                    </Row>
                    <div className="button-section">
                        <Button type="button" class="btn btn-warning">Collection</Button>
                        <Button type="button" class="btn btn-warning">filter</Button>
                    </div>
                </div>
            </div>
            <Container>
                <div className="middle-section">
                    <h1 style={{fontWeight:"bold", marginBottom:"30px", color:"#505050", textAlign:"center"}}>Find The Right Dog Breed For You</h1>
                    <Row>
                        <Col>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img style={{height: '12rem'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpg2whs_hG7nQK0WzVkfoW-S0odw31TAnVZg&usqp=CAU" />
                                <Card.Body className="title-body">
                                    <Card.Title className="title">Short Haired Dogs</Card.Title>             
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '17rem'}}>
                                <Card.Img style={{height: '12rem'}} variant="top" src="https://www.loveyourdog.com/wp-content/uploads/2019/04/Toy-Poodle-900x500.jpg" />
                                <Card.Body className="title-body">
                                    <Card.Title className="title">Top 5 smartest Dogs</Card.Title>             
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img style={{height: '12rem'}} variant="top" src="https://thepettown.com/wp-content/uploads/2017/08/pitbull2.jpg" />
                                <Card.Body className="title-body">
                                    <Card.Title className="title">Muscle Dogs</Card.Title>             
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img style={{height: '12rem'}} variant="top" src="https://cdn.akc.org/content/hero/chow_chow_bod_hero.jpg" />
                                <Card.Body className="title-body">
                                    <Card.Title className="title">Cute Dogs</Card.Title>             
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="filter-section">
                    <h1 style={{fontWeight:"bold", color:"#505050", marginBottom: "40px", textAlign:"center"}}>Filter Breeds</h1>
                    <Row className="filter-row">
                        <Col sm={5} className="filter">
                            <h6>SIZE</h6>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-amber">Small</button>
                                <button type="button" class="btn btn-amber">Medium</button>
                                <button type="button" class="btn btn-amber">Large</button>
                                <button type="button" class="btn btn-amber">Unique</button>
                            </div>
                        </Col>
                        <Col sm={5} className="filter">
                            <h6>ENERGY LEVEL</h6>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-amber">Low</button>
                                <button type="button" class="btn btn-amber">Moderate</button>
                                <button type="button" class="btn btn-amber">High</button>                            
                            </div>
                        </Col>
                        <Col sm={2} className="filter"><a href="">Reset Filters (0)</a></Col>
                    </Row>
                    <Row className="filter-row">
                        <Col sm={4} className="filter">
                            <h6>VOCALITY</h6>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-amber">Small</button>
                                <button type="button" class="btn btn-amber">Medium</button>
                                <button type="button" class="btn btn-amber">Large</button>
                            </div>
                        </Col>
                        <Col sm={4} className="filter">
                            <h6>EASY OF TRAINNING</h6>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-amber">Easy</button>
                                <button type="button" class="btn btn-amber">Average</button>
                                <button type="button" class="btn btn-amber">Difficult</button>                            
                            </div>
                        </Col>              
                        <Col sm={4} className="filter">
                            <h6>GROOMING REQUIREMENTS</h6>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-amber">Low</button>
                                <button type="button" class="btn btn-amber">Moderate</button>
                                <button type="button" class="btn btn-amber">High</button>                            
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="result-section">
                    <Row>
                        <Col sm={6} className="result-items">
                            <Card>
                                <Card.Img variant="top" src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/bull-terrier-card-large.jpg?bust=1535569003&width=900" />
                                <Card.Body className="breed-name"><a href="/breeds/bull-terrier">Bull Terrier</a></Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} className="result-items">
                            <Card>
                                <Card.Img variant="top" src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Boxer-600x260.png?bust=1556225807&width=900" />
                                <Card.Body className="breed-name"><a href="/breeds/boxer">Boxer</a></Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} className="result-items">
                            <Card>
                                <Card.Img variant="top" src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/doberman-pinscher-card-large.jpg?bust=1535568745&width=900" />
                                <Card.Body className="breed-name"><a href="/breeds/doberman">Doberman</a></Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} className="result-items">
                            <Card>
                                <Card.Img variant="top" src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/poodle-card-large.jpg?bust=1535568076&width=900" />
                                <Card.Body className="breed-name"><a href="/breeds/poodle">Poodle</a></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="pagination">
                    <Fragment>
                        <MDBBtn color="amber"><MDBIcon icon="angle-left" className="mr-5" />Left</MDBBtn>
                        <MDBBtn color="amber">Right<MDBIcon icon="angle-right" className="ml-5" /></MDBBtn>
                    </Fragment>
                </div>
            </Container>
        </div>
    )
}
