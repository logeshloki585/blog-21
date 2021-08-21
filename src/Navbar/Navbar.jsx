import React from 'react';
import "./Navbar.css";
import {BsBag} from "react-icons/bs"


function Navbar() {
    return (
        <div className="navbar">
            <div className="menu_border">
                  <p className="nav_menu">Menu</p>
            </div>
           <p className="logo">Ritual</p>
           <div className="nav_right gap-8">
                <p  className="nav_right_txt hidden lg:flex">Who We Are</p>
                <BsBag className="cart"/>
           </div>
        
        </div>
    )
}

export default Navbar
