import React from 'react';
import '../App.css';
import {Button, ListGroup} from "react-bootstrap";

function Contact() {
    return (
        <div>
            <h2>Contact Me</h2>
            <p className={"lead"}>@line98dev</p>
            <ListGroup variant="flush">
                <ListGroup.Item><Button href="https://github.com/Line98Dev" block>GitHub</Button></ListGroup.Item>
                <ListGroup.Item><Button href="https://www.linkedin.com/in/line98dev/" block>LinkedIn</Button></ListGroup.Item>
                <ListGroup.Item><Button href="mailto:hunter@line98.dev?subject=Website Contact" block>Email me</Button></ListGroup.Item>
                <ListGroup.Item><Button href="https://twitter.com/line98dev" block>Twitter</Button></ListGroup.Item>
                {/*<ListGroup.Item>Stack Overflow</ListGroup.Item>*/}
                {/*<ListGroup.Item>Medium</ListGroup.Item>*/}
            </ListGroup>
        </div>
    );
}

export default Contact;
