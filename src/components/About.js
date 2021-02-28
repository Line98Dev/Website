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
                    <h3>My Background</h3>
                    <p>I am from Fort Wayne, Indiana. Currently a senior computer science major and computer technology
                        minor at Ball State University. I'm looking to get into application or website development after
                        graduation. I work hard to solve the technology based issues that I come across and work
                        hard to get the tasks completed.</p>
                    <h3>Technical Skills</h3>
                    <p>I have various projects and assignments created in C#, .NET, Xamarin, Xamain.Forms, Javascript,
                        React.js, HTML, CSS, PHP, MySQL, Python, and JAVA using Visual Studio, Visual Studio Code,
                        and Jetbrains IDEs (IntelliJ, WebStorm, PHPStorm, Resharper, Rider, Pycharm, and Rider)</p>
                    <h3>Hobbies</h3>
                    <p>Currently, I am getting comfortable with 3D printing (using a Creality Ender 3 Pro) and also
                        creating bots for Discord in C# and Python, but still in the early stages.</p>
                </Col>
            </Row>
        </div>
    );
}

export default About;
