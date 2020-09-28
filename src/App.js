import React, {useState} from 'react';
import logo from './images/logo.webp';
import qrcode from './images/qrcode.svg'
import {Button, Container, Image, Modal, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Moon, Reply, Sun} from 'react-bootstrap-icons';
import About from "./components/About";
import EduExp from "./components/EduExp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import useDarkMode from 'use-dark-mode';
import './App.css';


function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const darkMode = useDarkMode(true);

    return (
        <div>
            <style type="text/css">
                {`
                .btn-outline-light:hover {
                    color: #1e90ff;
                }
                `}
            </style>
            <Navbar bg="hunter" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className={"mr-auto"}>
                        <img src={logo} width="30" height="30"
                             className="d-inline-block align-top" alt="" loading="lazy"/>
                        Hunter Line
                    </Navbar.Brand>
                    <Button className={"m-1 selected"} variant="outline-light"
                            onClick={darkMode.toggle} style={{alignSelf: 'center', display: 'flex'}}>
                        {darkMode.value ?
                            <Sun size={24}/>
                            :
                            <Moon size={24}/>
                        }
                    </Button>
                    <Button className={"m-1"} variant="outline-light" onClick={handleShow}
                            style={{alignSelf: 'center', display: 'flex'}}>
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
                                <Nav.Link as={NavLink} activeClassName='active disabled'
                                          to={"/education"}>Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active disabled'
                                          to={"/projects"}>Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeClassName='active disabled'
                                          to={"/contact"}>Contact</Nav.Link>
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
