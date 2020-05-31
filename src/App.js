import React from 'react';
import logo from './logo.png';
import './App.css';
import {Container, Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink
} from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
                    <Router history={""}>
                        <Nav justify variant="tabs">
                            <Nav.Item>
                                <Nav.Link as={NavLink} exact={true} activeClassName='active' to={"/"}>About</Nav.Link>
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
                            <Route exact path={"/"}>
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
                            <Redirect to="/" />
                        </Switch>
                    </Router>
                </Container>
            </main>
        </div>
    );
}

export default App;
