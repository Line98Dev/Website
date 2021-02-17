import React from 'react';
import '../App.css';
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Contact() {
    let imgSize = "32px"
    return (
        <div>
            <h2>Contact Me</h2>
            <Row>
                <Col xs={12} md={4}>
                    <p className={"lead"}>@line98dev</p>
                    <img src={logo} alt={""} width={"100%"} className={"d-none d-md-block"}/>
                </Col>
                <Col xs={12} md={8}>
                    <p>While I don't actively post, I am responsive on all platforms.</p>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="https://github.com/Line98Dev" block>
                                <FontAwesomeIcon icon={faGithub} className={"mr-1"} color="white"/>
                                GitHub
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="https://www.linkedin.com/in/line98dev/" block>
                                <FontAwesomeIcon icon={faLinkedin} className={"mr-1"} color="white" size={imgSize}/>
                                LinkedIn
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="mailto:hunter@line98.dev?subject=Website Contact" block>
                                <FontAwesomeIcon icon={faEnvelope} className={"mr-1"} color="white" size={imgSize}/>

                                Email me
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="https://twitter.com/line98dev" block>
                                <FontAwesomeIcon icon={faTwitter} className={"mr-1"} color="white" size={imgSize}/>
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
