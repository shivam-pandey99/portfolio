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
                   <FaGithub className="about-icons" color="white" size="2em"/>
    <FaInstagram className="about-icons"  color="pink" size="2em"/>
    <FaLinkedin className="about-icons"  color="blue" size="2em"/>
   </div>
    <button href="#contact" className="Header-btn">Contact Me</button><br/><br/><br/> 
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
