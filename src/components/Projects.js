import React from 'react';
import '../App.css';
import Card from "react-bootstrap/Card";
import {CardDeck} from "react-bootstrap";

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <CardDeck>
                <Card className={"p-0 border-hunter"}>
                    <Card.Body className={"py-1 py-md-2"}>
                        <Card.Title className={"text-hunter"}>This Website</Card.Title>
                        <Card.Text>
                            This website has been created multiple times and multiple iterations each time tweaking the
                            design to accomplish a different goal. The goal of the current iteration is to design a
                            mobile first layout that does not scroll. This was good to optimize space while making
                            simple to use.
                        </Card.Text>
                        <Card.Link
                            href="https://line98.dev"
                            className={"text-hunter d-block d-md-inline"}>This Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card className={"p-0 border-hunter"}>
                    <Card.Body className={"py-1 py-md-2"}>
                        <Card.Title className={"text-hunter"}>Capstone Project</Card.Title>
                        <Card.Subtitle className={"text-muted"}>@ Ball State University</Card.Subtitle>
                        <Card.Text>
                            Coming soon, too soon to know what the project is about.
                        </Card.Text>
                        <Card.Link
                            href="https://github.com/Line98Dev"
                            className={"text-hunter d-block d-md-inline"}>View the archive of the GitHub repository</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Projects;
