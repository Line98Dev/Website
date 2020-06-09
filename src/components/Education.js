import React from 'react';
import '../App.css';
import Card from "react-bootstrap/Card";
import {CardDeck} from "react-bootstrap";

function Education() {
    return (
        <div>
            <h2>Education</h2>
            <CardDeck>
                <Card border="danger">
                    <Card.Body>
                        <Card.Title className={"text-danger"}>Ball State University</Card.Title>
                        <Card.Text>
                            While working towards getting a Bachelor's in Science degree with a major in computer
                            science
                            and a minor in computer technology. During my time at Ball State I worked in the Ball State
                            Tech
                            Center providing technology based support to the campus community.
                        </Card.Text>
                        <Card.Link
                            href="https://www.bsu.edu/academics/collegesanddepartments/computer-science/academic-programs/majors/computer-science"
                            className={"text-danger d-block d-md-inline"}>Computer Science Major</Card.Link>
                        <Card.Link
                            href="https://www.bsu.edu/academics/collegesanddepartments/isom/academic-programs/minors/computer-technology"
                            className={"text-danger d-md-inline ml-0 ml-md-4"}>Computer Technology Minor</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>CompTIA Certifications</Card.Title>
                        <Card.Text>
                            I am currently planning on getting CompTIA Security+, CompTIA CySA+, CompTIA CASP+, and
                            CompTIA PenTest+. These are all future plans with wanting to complete them before
                            graduation.
                        </Card.Text>
                        <Card.Link href="#" variant={"hunter"}
                                   className={"text-hunter d-block d-md-inline"}>To be utilized</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>

        </div>
    );
}

export default Education;
