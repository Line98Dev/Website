import React, {useState} from 'react';
import logo from './images/logo.webp';
import qrcode from './images/qrcode.svg'
import './App.css';
import {Button, Container, Image, Modal, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Reply} from 'react-bootstrap-icons';
import About from "./components/About";
import EduExp from "./components/EduExp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar bg="hunter" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className={"mr-auto"}>
                        <img src={logo} width="30" height="30"
                             className="d-inline-block align-top" alt="" loading="lazy"/>
                        Hunter Line
                    </Navbar.Brand>
                    <Button variant="outline-light" onClick={handleShow} style={{alignSelf: 'center', display: 'flex'}}>
                        <Reply size={24}/> Share this
                    </Button>
                </Container>
            </Navbar>

            <main>
                <Container>
                    <h2>Hunter Line</h2>
                    <h4>Junior Developer</h4>
                    <Router history={""}>
                        <Nav justify variant="tabs">
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active disabled' to={"/about"}>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active disabled' to={"/education"}>Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active disabled' to={"/projects"}>Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active disabled' to={"/contact"}>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Switch>
                            <Route exact path={"/about"}>
                                <About/>
                            </Route>
                            <Route path={"/education"}>
                                <EduExp/>
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
