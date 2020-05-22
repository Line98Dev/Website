import React from 'react';
import picture from '../picture.jpg'
import '../App.css';
import {Image} from "react-bootstrap";

function About() {
    return (
        <div>
            <Image src={picture} alt="" roundedCircle fluid className={"shadow"}/>
            <h3>About Me</h3>
            <p>I am from Fort Wayne, Indiana. Currently a senior computer science major at Ball State
                University. I work hard to solve the technology based issues that I come across and work
                hard to get the tasks completed.</p>
        </div>
    );
}

export default About;
