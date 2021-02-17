import React from 'react';
import picture from '../images/picture-low.jpg'
import '../App.css';
import {Col, Image, Row} from "react-bootstrap";

function About() {
    return (
        <div>
            <h2>About Me</h2>
            <Row>
                <Col xs={12} md={4}>
                    <Image src={picture} alt="" roundedCircle fluid className={"shadow"}/>
                </Col>
                <Col xs={12} md={8}>
                    <p>I am from Fort Wayne, Indiana. Currently a senior computer science major and computer technology
                        minor at Ball State University. I'm looking to get into application or website development after
                        graduation. I work hard to solve the technology based issues that I come across and work
                        hard to get the tasks completed.</p>
                </Col>
            </Row>
        </div>
    );
}

export default About;
