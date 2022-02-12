import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

function Navbar() {
    return (
    <>
        <div className="navba">
            <div className='logo'>
                <img src="https://www.seekpng.com/png/detail/283-2832318_logos-free-landscaping-logos-hola-klonec-co-attractive.png" alt="logo" />
            </div>
            <div className="search">
                <input type="text" placeholder=' search.....'/>
                <i class="fas fa-search"></i>
            </div>
        </div>
       
        <div className="nav_items">    
                <Link to={'/'}><button className="item">HOME</button></Link>
                <Link to={'/c/python/t1'}><button className="item">PYTHON</button></Link>           
                <Link to={'/c/webdev/t'}><button className="item">WEBDEV</button></Link>
                <Link to={'/c/deeplearning/t'}><button className="item">DEEPLEARNING</button></Link>
        </div>
    </>
    )
}

export default Navbar
