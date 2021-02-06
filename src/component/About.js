import React, { Component } from 'react';
import Logo from './img.jpg'; 

import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
 
class About extends Component {
render() { 
return ( 
<div id="about" className="container-fluid">
    <div className="about-text text-center ">
        <h1>About Me</h1>
        <img className="img-fluid" src={Logo} alt="Logo" />
        <p>
        hey..! Its Shivam Mern-stack Developer.<br/>
        completed my schooling in 2017.<br/>
        Graduated in Bach. of computer Application(2020)
        </p>
    <FaGithub className="about-icons" color="black" size="2em"/>
    <FaInstagram className="about-icons"  color="pink" size="2em"/>
    <FaLinkedin className="about-icons"  color="blue" size="2em"/>
    </div>
</div>
);
}
}
 
export default About;