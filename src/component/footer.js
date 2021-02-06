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
    <div className="move-upper">
<IoIosArrowDropupCircle color="grey" size="4rem"/>
    </div>
<div className="col-lg-10 mx-auto mb-14">
<div className="icons">
   <FaGithub className="hello" color="black" size="3em"/>
    <FaInstagram className="hello" color="pink" size="3em"/>
    <FaLinkedin className="hello" color="blue" size="3em"/>
    <SiGmail className="hello" color="red" size="3em"/>

    </div>
</div>
            </footer>


         );
    }
}
 
export default Footer