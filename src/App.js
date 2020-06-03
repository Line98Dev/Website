import React, {useState} from 'react';
import logo from './images/logo.png';
import qrcode from './images/qrcode.svg'
import './App.css';
import {Button, Container, Image, Modal, Nav} from "react-bootstrap";
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Reply} from 'react-bootstrap-icons';
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <nav className="navbar navbar-dark bg-hunter mb-2">
                <Container>
                    <span className="navbar-brand">
                    <img src={logo} width="30" height="30"
                         className="d-inline-block align-top" alt="" loading="lazy"/>
                    Hunter Line
                    </span>
                    <Button variant="outline-light" onClick={handleShow} style={{alignSelf: 'center', display: 'flex'}}>
                        <Reply size={24}/> Share this
                    </Button>

                </Container>
            </nav>
            <main>
                <Container>
                    <h2>Hunter Line</h2>
                    <h4>Junior Developer</h4>
                    <Router history={""}>
                        <Nav justify variant="tabs">
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active' to={"/about"}>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active' to={"/education"}>Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active' to={"/projects"}>Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active' to={"/contact"}>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Switch>
                            <Route exact path={"/about"}>
                                <About/>
                            </Route>
                            <Route path={"/education"}>
                                <Education/>
                            </Route>
                            <Route path={"/projects"}>
                                <Projects/>
                            </Route>
                            <Route path={"/contact"}>
                                <Contact/>
                            </Route>
                            <Redirect to="/about"/>
                        </Switch>
                    </Router>
                </Container>
            </main>
            <Modal show={show} onHide={handleClose} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Share my site</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={qrcode} alt="" fluid style={{alignSelf: 'center', display: 'flex'}}
                           className={"shadow mx-auto"} loading="lazy"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;
