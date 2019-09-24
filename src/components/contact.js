import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faStackOverflow, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



export function Contact() {
    return (
        <div>
            <h2>Get In Touch with Me</h2>
            <div className="social">
                <a href="https://github.com/htline" title="Github"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="https://stackoverflow.com/users/12080812/htline" title="Stack Overflow"><FontAwesomeIcon icon={faStackOverflow}/></a>
                <a href="https://www.linkedin.com/in/hunter-line-870860145/" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                <a href="mailto:hunter@tline.dev" title="Email"><FontAwesomeIcon icon={faEnvelope}/></a>
                <a href="https://twitter.com/hunter8line" title="Twitter"><FontAwesomeIcon icon={faTwitter}/></a>
            </div>
        </div>
    )
}
