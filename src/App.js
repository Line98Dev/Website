import React from 'react';
import Namebar from "./components/header";
import Copyright from "./components/footer";
import {Projects} from "./components/projects";
import {WorkHistory} from "./components/work";
import {Education} from "./components/edu";
import {About} from "./components/about";
import {Contact} from "./components/contact";

function App() {
    return (
        <div className="App">
            <Namebar/>
            <main>
                <section className="Sidebar">
                    <h3>Hunter Line</h3>
                    <h4>Junior Software Developer & Student</h4>
                    <img src="https://via.placeholder.com/300"  alt=""/>
                    <About/>
                    <Contact/>
                </section>
                <section>
                    <Projects/>
                    <hr/>
                    <WorkHistory/>
                    <hr/>
                    <Education/>
                </section>
            </main>
            <Copyright/>
        </div>
    );
}

export default App;
