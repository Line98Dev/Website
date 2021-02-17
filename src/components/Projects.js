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
                    <Card.Body>
                        <Card.Title className={"text-hunter"}>This Website</Card.Title>
                        <Card.Text>
                            This website has been created multiple times and multiple iterations each time tweaking the
                            design to accomplish a different goal. The goal of the current iteration is to design a
                            mobile first layout that does not scroll. This was good to optimize space while making
                            simple to use.
                        </Card.Text>
                        <Card.Link
                            href="https://line98.dev"
                            className={"text-hunter d-block d-md-inline"}>This Website
                        </Card.Link>
                    </Card.Body>
                </Card>
                <Card className={"p-0 border-hunter"}>
                    <Card.Body>
                        <Card.Title className={"text-hunter"}>Hey Ya!</Card.Title>
                        <Card.Text>
                            HeyYa! is my first project that I was apart of that was to think of and create a new
                            application. It is an instant messaging application to send messages to your friends in real
                            time. It was created with React and is hosted on Google Firebase.
                        </Card.Text>
                        <Card.Link
                            href="https://chat.heyya.app"
                            className={"text-hunter d-block d-md-inline"}>Hey Ya! website
                        </Card.Link>
                    </Card.Body>
                </Card>
                <Card className={"p-0 border-success"}>
                    <Card.Body>
                        <Card.Title className={"text-success"}>Zooom Producer</Card.Title>
                        <Card.Subtitle className={"text-muted"}>@ Ball State University</Card.Subtitle>
                        <Card.Text>
                            Zooom Producer is a Xamarin application for Windows (UWP), MacOS, Android, and iOS which
                            allows sports officials to organize, clip, and upload playlists of sporting events for the
                            purposes of training to their <a className={"text-success"} href={"https://zooomapp.com/"}>Zooom
                            App</a> account. This greatly reduced server costs as trimming videos is now local as well
                            as quality of life improvements for the officials.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Projects;
