import React from 'react';
import '../App.css';
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import logo from "../images/logo.svg"
import {Github, Linkedin, Twitter} from '@icons-pack/react-simple-icons';


function Contact() {
    let imgSize = "16px"
    return (
        <div>
            <h2>Contact Me</h2>
            <Row>
                <Col xs={12} md={6}>
                    <p className={"lead"}>@line98dev</p>
                    <p>While I don't actively post, I am responsive on all platforms.</p>
                    <img src={logo} alt={""} width={"100%"} className={"d-none d-md-block"}/>
                </Col>
                <Col xs={12} md={6}>

                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="https://github.com/Line98Dev" block>
                                <Github className={"m-1"} color="white" size={imgSize}/>
                                GitHub
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="https://www.linkedin.com/in/line98dev/" block>
                                <Linkedin className={"m-1"} color="white" size={imgSize}/>
                                LinkedIn
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="mailto:hunter@line98.dev?subject=Website Contact" block>
                                <svg width={imgSize} height={imgSize} viewBox="0 0 16 16"
                                     className="bi bi-envelope-fill"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                </svg>
                                Email me
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="https://twitter.com/line98dev" block>
                                <Twitter className={"m-1"} color="white" size={imgSize}/>
                                Twitter
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;
