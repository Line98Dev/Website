import React from 'react';
import picture from '../images/picture.jpg'
import '../App.css';
import {Image} from "react-bootstrap";

function About() {
    return (
        <div>
            <h2>About Me</h2>
            <Image src={picture} alt="" roundedCircle fluid className={"shadow"}/>
            <p>I am from Fort Wayne, Indiana. Currently a senior computer science major at Ball State
                University. I'm looking to get into information security and planning on getting certifications before
                graduation. I work hard to solve the technology based issues that I come across and work
                hard to get the tasks completed.</p>
        </div>
    );
}

export default About;
