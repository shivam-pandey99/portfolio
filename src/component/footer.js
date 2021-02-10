import React, { Component } from 'react';
import { IconContext } from 'react-icons'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { IoIosArrowDropupCircle } from 'react-icons/io'

class Footer extends Component {
   

    render() { 
        <IconContext.Provider value={{
        color:"black", size: "150em",
        }}/>
        return ( 

  
<footer className="w-100  text-center  bg-warning">
    
<div className="col-lg-10 mx-auto mb-14">
<div className="icons">
    <a href="https://github.com/shivam-pandey99">
     <FaGithub className="hello" color="black" size="3rem"/>
    </a> 
    <a href="https://www.instagram.com/shivampandey__07/">
    <FaInstagram className="hello"  color="pink" size="3rem"/>
    </a>  
    <a href="https://www.linkedin.com/in/shivammpandey/">
    <FaLinkedin className="hello"  color="blue" size="3rem"/>
    </a> 
    <a href="#contact">   
    <SiGmail className="hello" color="red" size="3em"/>
    </a>
    </div></div>
</footer>
  );
    }
}
 
export default Footer