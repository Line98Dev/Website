import React from 'react';
import '../App.css';
import Card from "react-bootstrap/Card";
import {CardDeck} from "react-bootstrap";

function EduExp() {
    return (
        <div>
            <h2>Education & Experience</h2>
            <CardDeck>
                <Card border="danger" className={"p-0"}>
                    <Card.Body>
                        <Card.Title className={"text-danger"}>Ball State University</Card.Title>
                        <Card.Text>
                            While working towards getting a Bachelor's in Science degree with a major in computer
                            science and a minor in computer technology. During my time at Ball State I worked a few
                            finished projects like HeyYa! and Zooom Producer.
                        </Card.Text>
                        <Card.Link
                            href="https://www.bsu.edu/academics/collegesanddepartments/computer-science/academic-programs/majors/computer-science"
                            className={"text-danger d-block d-md-inline"}>Computer Science Major</Card.Link>
                        <Card.Link
                            href="https://www.bsu.edu/academics/collegesanddepartments/isom/academic-programs/minors/computer-technology"
                            className={"text-danger d-md-inline ml-0 ml-md-4"}>Computer Technology Minor</Card.Link>
                    </Card.Body>
                </Card>
                <Card border="danger" className={"p-0"}>
                    <Card.Body>
                        <Card.Title className={"text-danger"}>Unified Technology Support</Card.Title>
                        <Card.Subtitle className={"text-muted"}>@ Ball State University</Card.Subtitle>
                        <Card.Text>
                            While working on my degree. I was employed by Unified Technology Support providing general
                            tech support over the phone and then working on desktop support. During my time providing
                            desktop support to the campus, I created many internal use tools and websites to assist.
                        </Card.Text>
                        <Card.Link
                            href="https://www.bsu.edu/about/administrativeoffices/uts"
                            className={"text-danger d-block d-md-inline"}>Unified Technology Support</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default EduExp;
