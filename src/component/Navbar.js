import { FaBars } from 'react-icons/fa'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Nav = () => {
  return (
  <div className="nav">
<ul>
<li>
    <a href="#home">Home</a>
  </li>
  <li>
    <a href="#about">About</a>
  </li>
  <li>
    <a href="#project">Projects</a>
  </li>
  <li>
    <a href="#skill">Skills</a>
  </li>
  <li>
    <a href="#contact">Contact</a>
  </li>
  
</ul>
</div>
  )
}

const Navbar = () => {
return(
<div id="home" className="navbar-sec">
<div className="list w-100 text-center"> 
<div>
<ul>
<li>
    <a href="#home">Home</a>
  </li>
  <li>
    <a href="#about">About</a>
  </li>
  <li>
    <a href="#project">Projects</a>
  </li>
  <li>
    <a href="#skill">Skills</a>
  </li>
  <li>
    <a href="#contact">Contact</a>
  </li>
  
</ul>
</div>

  <div className="bars"> 
  <button onClick={Nav} ><FaBars color="white" size="2rem" /></button>
  </div>

</div>

</div>
)
}

export default Navbar
