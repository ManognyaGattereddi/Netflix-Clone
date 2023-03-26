import React, { useState, useEffect } from 'react'
import "./Nav.css";
import logose from './components/image/logose.png';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
    if(window.scrollY > 100) {
     handleShow(true);
 } else {
     handleShow(false);
 }
 };

 useEffect(() => {
     window.addEventListener("scroll", transitionNavBar);
     return () => window.removeEventListener("scroll",transitionNavBar);
     }, []);
     
    return (

       
        <div className={`nav ${show && "nav_blue"}`}>
            <div className="nav_contents">
            <img 
            className="nav_logo"
            src={logose} alt=""/>
         <img
         
         className="nav_avatar"
         src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" alt=""/>

         
            </div>
        </div>
    );
}

export default Nav
