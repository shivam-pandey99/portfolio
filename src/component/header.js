import React from 'react';
import TypeWriter from "react-typewriter";
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
 import { IoIosArrowDropdownCircle} from 'react-icons/io'

class Header extends React.Component {
render() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
            <h1>  <TypeWriter typing={0.5}>I'm Shivam Pandey.</TypeWriter>
              </h1>
               <p color="white">Mern-stack Develpoer</p> 
               <div className="header-icons">
               <a href="https://github.com/shivam-pandey99">
                       <FaGithub className="about-icons" color="white" size="2em"/>
                </a> 
                  <a href="https://www.instagram.com/shivampandey__07/">
                    <FaInstagram className="about-icons"  color="pink" size="2em"/>
                </a>  
                <a href="https://www.linkedin.com/in/shivammpandey/">
                <FaLinkedin className="about-icons"  color="blue" size="2em"/>
                </a>        
    
   </div>
   <a href="#contact">
    <button className="Header-btn">Contact Me</button>
    </a>
    <br/><br/><br/> 
    <p className="scrolldown">
    <a className="smoothscroll" href="#about">
< IoIosArrowDropdownCircle color="white" size="3rem"/>
</a>
    </p> </div>
        </div>
    )
}
}
export default Header
