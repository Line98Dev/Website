import React from 'react';

export function Projects(){
    return(
        <div>
            <h2>Past Projects</h2>
            <h3><a href="https://hunter.tline.dev">This Website</a></h3>
            <ul>
                <li>This website is created with React, hosted with AWS Amplify, DNS handled by Cloudflare.</li>
                <li>The goal of this site is to learn new technologies.</li>
            </ul>
            <h3><a href="https://heyya.app">Hey Ya!</a></h3>
            <ul>
                <li>Created for a class. Made with a group of 4 people.</li>
                <li>Instant Messenger using Google Firebase built with React.</li>
                <li>Handle authentication using 3rd party tools.</li>
                <li>Implement data storage and data security.</li>
            </ul>
            <h3><a href="https://nlsoftworks.com">NLSoftworks</a></h3>
            <ul>
                <li>Mange the local server and work on adding new features.</li>
                <li>Research new technologies and how they can benefit the goals.</li>
            </ul>
        </div>
    )
}