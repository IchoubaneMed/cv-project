import React, { Component } from 'react';
import { BsGithub } from "react-icons/bs";

class Footer extends Component {
    render() {
        return (
            <div>
                Created by 
                <span className="creator">
                <a href="https://www.linkedin.com/in/mohamed-ichoubane-280431156/" target="_blank" rel="noreferrer">
                     Mohamed Ichoubane
                </a>
                </span>
                <a href="https://github.com/IchoubaneMed/cv-project" target="_blank" rel="noreferrer">
                    <span className="github"><BsGithub /></span>
                </a>
            </div>
        );
    }
}

export default Footer;