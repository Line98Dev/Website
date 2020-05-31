import React from 'react';
import '../App.css';
import Card from "react-bootstrap/Card";

function Education() {
    return (
        <div>
            <h2>Education</h2>
            <Card border="danger" className="bg-dark text-white" fluid >
                <Card.Img src="https://www.bsu.edu/-/media/www/images/home/banner/summershafertower.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Ball State University</Card.Title>
                    <Card.Text className={"shadow p-3 mb-5"}>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default Education;
