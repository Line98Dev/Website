import React from 'react';
import logo from './logo.png';
import './App.css';
import {Container, Tab, Tabs} from "react-bootstrap";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-hunter mb-2">
                <Container>
                    <span className="navbar-brand">
                    <img src={logo} width="30" height="30"
                         className="d-inline-block align-top" alt="" loading="lazy"/>
                    Hunter Line
                    </span>
                </Container>
            </nav>
            <main>
                <Container>
                    <h1>Hunter Line</h1>
                    <h3>Junior Developer</h3>
                    <Tabs justify defaultActiveKey="about" id="uncontrolled-tab-example">
                        <Tab eventKey="about" title="About">
                            <About/>
                        </Tab>
                        <Tab eventKey="education" title="Education">
                            <Education/>
                        </Tab>
                        <Tab eventKey="projects" title="Projects">
                            <Projects/>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <Contact/>
                        </Tab>
                    </Tabs>
                </Container>
            </main>
        </div>
    );
}

export default App;
