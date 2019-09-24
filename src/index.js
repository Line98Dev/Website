import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Namebar from "./components/header";
import {About} from "./components/about";
import {Contact} from "./components/contact";
import {Projects} from "./components/projects";
import {WorkHistory} from "./components/work";
import {Education} from "./components/edu";

ReactDOM.render(
    <div>
        <Namebar/>
        <main>
            <section className="Sidebar">
                <h2>Hunter Line</h2>
                <h3>Junior Software Developer & Student</h3>
                <img src="https://via.placeholder.com/350x300" alt=""/>
                <About/>
                <hr/>
                <Contact/>
                <hr/>
            </section>
            <section>
                <Projects/>
                <hr/>
                <WorkHistory/>
                <hr/>
                <Education/>
            </section>
        </main>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
