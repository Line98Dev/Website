import React from 'react';
import '../App.css';
import {ListGroup} from "react-bootstrap";

function Contact() {
    return (
        <div>
            <p><span className={"h1"}>Contact Me</span> <span className={"h3"}>@line98dev</span></p>
            <ListGroup variant="flush">
                <ListGroup.Item>@Line98Dev</ListGroup.Item>
                <ListGroup.Item>Github</ListGroup.Item>
                <ListGroup.Item>LinkedIn</ListGroup.Item>
                <ListGroup.Item>Email</ListGroup.Item>
                <ListGroup.Item>Twitter</ListGroup.Item>
                {/*<ListGroup.Item>Stack Overflow</ListGroup.Item>*/}
                {/*<ListGroup.Item>Medium</ListGroup.Item>*/}
            </ListGroup>
        </div>
    );
}

export default Contact;
