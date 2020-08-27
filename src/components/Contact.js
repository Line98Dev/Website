import React from 'react';
import '../App.css';
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import logo from "../images/logo.svg"

function Contact() {
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
                            <Button variant={"hunter"} href="https://github.com/Line98Dev" block>GitHub</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="https://www.linkedin.com/in/line98dev/"
                                    block>LinkedIn</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="mailto:hunter@line98.dev?subject=Website Contact" block>Email
                                me</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant={"hunter"} href="https://twitter.com/line98dev" block>Twitter</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;
