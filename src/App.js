import React from 'react';
import './App.css';
import Namebar from "./components/header";

function App() {
  return (
    <div className="App">
      <Namebar/>
      <main>
        <section className="Sidebar">
          <h3>Hunter Line</h3>
          <h4>Junior Software Developer & Student</h4>
        </section>
        <section>
          <h3>About Me</h3>
          <p>I am from Fort Wayne, Indiana. Currently a junior computer science Major at Ball State University. I grew
            up with a family computer which I experimented with and looked to try new and different things with it and
            continue this trend of experimenting with computers and technology to this day. I work hard to solve the
            technology based issues that I come across and work hard to get the tasks completed.</p>
          <h3>Education</h3>
          <p><b>Ball State University</b></p>
          <p>August 2017 - May 2021 (Expected)</p>
          <p>Computer Science Major</p>
          <p>Computer Technology Minor</p>
          <hr/>
          <h3>Work Experience</h3>
          <p><b>Unified Technology Support - HelpDesk Support Consultant</b></p>
          <p>September 14, 2017 - May 19, 2019</p>
          <ul>
            <li>Provide phone based technology support for the Ball State Campus.</li>
            <li>Support problems with Office 365, Windows 10, and MacOS.</li>
            <li>Record issues and record work using ServiceNow.</li>
            <li>Collaborating with colleagues to find solutions to the variety of issues we encounter.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
